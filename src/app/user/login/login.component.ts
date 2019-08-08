import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.pattern('^[a-zA-Z0-9-_]')],
      password: ['', Validators.pattern('^[a-zA-Z0-9-_]')],
      rememberMe: [true]
    });
  }
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get rememberMe() { return this.form.get('rememberMe'); }

  login() {
    this.userService.login(this.form.value)
    .subscribe(res => {
      if (res) {
        this.snackbar.open('登入成功', 'OK', { duration: 3000 });
        this.router.navigate(['/member']);
      } else {
        this.snackbar.open('請檢查輸入資料', 'OK', {duration: 3000 });
      }
    });
  }
}
