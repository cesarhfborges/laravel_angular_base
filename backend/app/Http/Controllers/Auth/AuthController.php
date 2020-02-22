<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Notifications\CadastroActivate;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function cadastro(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|string',
            'sobrenome' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        if ($validator->fails()){
            return response()->json([
                'status' => 401,
                'mensagem' => $validator->errors()
            ], 401);
        }

        $user = new User([
            'nome' => $request->nome,
            'sobrenome' => $request->sobrenome,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'activation_token' => Str::random(60)
        ]);
        $user->save();

//        $user->notify(new CadastroActivate($user));

        return response()->json([
            'status' => 201,
            'message' => 'Usuário cadastrado com sucesso.'
        ], 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if ($validator->fails()){
            return response()->json([
                'status' => 401,
                'mensagem' => $validator->errors()
            ], 401);
        }

        $credentials = request(['email', 'password']);

        if(!Auth::attempt($credentials))
            return response()->json([
                'status' => 401,
                'mensagem' => 'Não Autorizado'
            ], 401);

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'status' => 200,
            'token_type' => 'Bearer',
            'access_token' => $tokenResult->accessToken,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'user' => Auth::user()
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'status' => 201,
            'mensagem' => 'Logout efetuado com sucesso.'
        ]);
    }

    public function user(Request $request)
    {
        return response()->json([
            'status' => 201,
            $request->user()
        ]);
    }
}
