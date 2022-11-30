import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulo: FormGroup;
  

  constructor(private formB: FormBuilder, private crudS: CrudService) { }

  ngOnInit(): void {
    this.createForm();
  }

  get claveInvalida(){
    return this.articulo.get('clave').invalid && this.articulo.get('clave').touched
  }

  get categoriaInvalida(){
    return this.articulo.get('categoria').invalid && this.articulo.get('categoria').touched
  }

  get nombreInvalido(){
    return this.articulo.get('nombre').invalid && this.articulo.get('nombre').touched
  }

  createForm(){
    this.articulo = new FormGroup({
      clave: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      precios: new FormArray([
        new FormGroup({
          precio: new FormControl('')
        })
      ]),
      activo: new FormControl(true)
    });
  }
  

  envArt(){
    console.log(this.articulo.value);
    
    // this.crudS.envioArt(this.articulo.value).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //   }
    // )
  }

  // addPrecio(){
  //   (<FormArray>this.articulo.controls['precios']).push(this.articulo.controls['precio']);
  // }

}
