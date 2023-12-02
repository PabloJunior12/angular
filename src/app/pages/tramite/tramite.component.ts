import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTramiteComponent } from './new-tramite/new-tramite.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TramiteService } from 'src/app/services/tramite.service';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.css']
})
export class TramiteComponent  implements OnInit {

  data = []

  constructor( private _dialog:MatDialog, private _notify:MatSnackBar, private _tramite:TramiteService ) { }

  ngOnInit(): void {

    this.getData()

  }

  getData(){

    this._tramite.getTramiteService().subscribe({

      next : (result:any[]) => {

        this.data = result

        console.log(this.data);

      }

    })

  }

  openDialogCreate(){

    const dialogRef = this._dialog.open( NewTramiteComponent, {
      width : '1100px',
  
    });

    dialogRef.afterClosed().subscribe( result => {
      
      if(!result) { return }  
      
      this._notify.open('Tramite registrado', 'cerrar', {

        duration : 3000

      })

    });

  }

}
