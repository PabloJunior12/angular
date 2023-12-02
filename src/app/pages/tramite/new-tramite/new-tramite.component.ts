import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AreaService } from 'src/app/services/area.service';
import { TramiteService } from 'src/app/services/tramite.service';


@Component({
  selector: 'app-new-tramite',
  templateUrl: './new-tramite.component.html',
  styleUrls: ['./new-tramite.component.css']
})
export class NewTramiteComponent implements OnInit {

  form:FormGroup
  code:string;
  areas:any[] = []
  documentos:any[] = []
  dni = '';
  archivo:any;
  area:any;
  sigla:string;
  loading = false;
  fecha_año = new Date()
  checked = false
  isDateTime = false
  blocked = false
  localidades = []

  loadingConsult = false

  numeracion = ''

  constructor(private fb:FormBuilder, private _area:AreaService, private _tramite:TramiteService, public dialogRef:MatDialogRef<NewTramiteComponent>) {

    this.crearFormulario()

   }

  ngOnInit(): void {

    this._area.getAreaservice().subscribe( (res:any[]) => {

       this.areas = res.filter( item => item.id !== JSON.parse(localStorage.getItem('area'))  )

      
      })
  }

  crearFormulario()
  {

    this.form = this.fb.group({

 
      dni : ['', [Validators.minLength(8) ] ],
      razonSocial : [, Validators.required ],
      origenId : [localStorage.getItem('area'), Validators.required ],
      destinoId : ['', Validators.required ],
      asunto : [''],
   
   
    });

  }

  guardar(){

    console.log(JSON.stringify(this.form.value));

    this._tramite.newTramiteService(this.form.value).subscribe({

        next : result => {

          this.dialogRef.close(true)

        }

    })

  }


  consultar(){

    let dni = this.input('dni').value

    if(dni.length == 8){

      this.loadingConsult = true

      this._area.getDni( dni ).subscribe( (res:any) => {
  
          this.input('razonSocial').setValue( res.data.nombre_completo.toLowerCase() )
     

          this.loadingConsult = false

      }, error => {

        this.loadingConsult = false

      })


    }else if(dni.length == 11){

      this.loadingConsult = true

      this._area.getRuc( dni ).subscribe( (res:any) => {
        
        
  
        this.input('razonSocial').setValue( res.data.nombre_o_razon_social.toLowerCase() )
       

        this.loadingConsult = false
     }, error => {

        this.loadingConsult = false

     })

    }

  }

  cancelar()
  {

    this.dialogRef.close()

  }


  input(input:string){

    return this.form.get(input)

  }


}
