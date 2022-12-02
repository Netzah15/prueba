import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulo: FormGroup;
  categorias;
  newCat=[];
  

  constructor(private formB: FormBuilder, private crudS: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.getCategorias();
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
      precios: this.formB.array([]),
      activo: new FormControl(true)
    });
  }
  

  envArt(){
    console.log(this.articulo.value);
    
    this.crudS.envioArt(this.articulo.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigateByUrl('/edita');
      }
    )
  }

  addPrecio(){
    const precios = this.articulo.get('precios') as FormArray;
    const precioo = this.formB.group({
      precio: [null]
    })
    precios.push(precioo);
  }

  getCategorias(){
    this.crudS.getCategorias().subscribe(
      (data:any)=>{        
        this.categorias=data.data;
        // console.log(this.categorias);
        
        this.categorias.forEach(element =>
          this.newCat.push(element['nombre'])
          )        
      }
    )
  }

}
