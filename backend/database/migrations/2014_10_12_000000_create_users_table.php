<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nome')->nullable(false);
            $table->string('sobrenome')->nullable(true);
            $table->string('email')->unique();
            $table->string('password');

            $table->boolean('active')->default(false);
            $table->string('activation_token')->nullable(true);
            $table->timestamp('email_verified_at')->nullable();

            $table->date('data_nasc')->nullable();

            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
