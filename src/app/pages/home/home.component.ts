import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = []
  area:any

  constructor(private _product:ProductService, private _router:Router, private _area:AreaService) { }

  ngOnInit(): void {

    this.getArea()


  }


  getArea(){

    let id = +localStorage.getItem('area')

    this._area.getAreaId(id).subscribe({

      next : result => {

        this.area = result

      }

    })

  }

  logout(){

    localStorage.removeItem('area')

    this._router.navigateByUrl('/')

  }


  getData(){

    this._product.getProductsService().subscribe({

      next : result => {

        this.data = result
        console.log(this.data);

      }

    })

  }

}
