import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {AuthProvider } from '../../providers/auth';
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  loginForm = {
    email: '',
    password: ''
  };
 
  constructor(public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    private authProvider: AuthProvider) {
    this.menu.swipeEnable(false);
  }
 
  
  //Ir para página de cadastro
  register() {
    this.nav.setRoot(RegisterPage);
  }

   //Login
   fazerLogin(){
    this.authProvider.login(this.loginForm)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Esqueceu sua Senha?',
      message: "Digite seu Email para enviarmos um link de restauração.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email foi enviado',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
