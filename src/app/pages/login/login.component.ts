import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/services/area.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup
  data = []
  constructor(private _area:AreaService, private fb:FormBuilder, private _notify:MatSnackBar, private router:Router) {
    
    this.newForm()

   }

  ngOnInit(): void {

    this.getArea()
    this.listeners()

  }

  getArea(){

    this._area.getAreaservice().subscribe({

      next : result => {

        this.data = result
     

      }

    })

  }

  listeners(){

    this.form.get('area').valueChanges.subscribe( result => {

      this.form.get('name').setValue(result)

    })

  }


  newForm(){

    this.form = this.fb.group({

       name : [''],
       password : [''],
       area : []

    })

  }

  save(){

 

    this._area.login(this.form.get('name').value , this.form.get('password').value).subscribe({

        next : (result:any) => {


           localStorage.setItem('area', result.area )

            this.router.navigateByUrl('dashboard')

        }, error : error => {

           console.log(error);
           this._notify.open(error.error, 'cerrar', {

            duration : 2000

           })
        }

    })

  }


}
