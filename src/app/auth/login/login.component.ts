import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService} from '../shared/auth.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors:any[] = [];
  notifiyMessage:string = '';
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private http: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params)=>{
      if(params['registered'] === 'success'){
        this.notifiyMessage='You have been succesfuly registered, you can login now!'
      }
    });
  }
  initForm(){
    this.loginForm=this.fb.group({
      email: ['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password:['',Validators.required]
    });
  }
  isInvalidFrom(fieldName): boolean{
    return this.loginForm.controls[fieldName].invalid && (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }
  isRequired(fieldName): boolean{
    return this.loginForm.controls[fieldName].errors.required;
  }
  login(){
    this.auth.login(this.loginForm.value).subscribe((token)=>{
      this.http.navigate(['/rentals'])
    },(err)=>{
      this.errors=err.error.errors;
    })
  }
}
