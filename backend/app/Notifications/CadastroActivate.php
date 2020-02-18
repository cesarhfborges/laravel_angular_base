<?php

namespace App\Notifications;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CadastroActivate extends Notification
{
    use Queueable;
    public function __construct(User $user)
    {
        $this->toMail($user);
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
//        return (new MailMessage)
//                    ->line('The introduction to the notification.')
//                    ->action('Notification Action', url('/'))
//                    ->line('Thank you for using our application!');
        $url = '/api/auth/cadastro/activate/'.$notifiable->activation_token;
        return (new MailMessage)
            ->subject('Confirme Sua Conta')
            ->line('Obrigado por se cadastrar! Antes de começar, você deve confirmar sua conta.')
            ->action('Confirmar conta', url($url))
            ->line('Obrigado por usar nossos sistemas!');
    }

    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
