import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { AuthProvider } from "../../providers/auth";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  
  registerForm = {
    email: '',
    password: '',
    name: ''
  }

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider) {
  }

  
  //Registro
criarNovaConta(){
  console.log(this.registerForm)
  this.authProvider.register(this.registerForm)
  .then((res) => {
    let uid = res.user.uid;

    let data = {
      uid: uid,
      name: this.registerForm.name,
      email: this.registerForm.email
    }
  })
  .catch((err) => {
    console.log(err)
  }) 
}

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}

