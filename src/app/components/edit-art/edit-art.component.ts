import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-edit-art',
  templateUrl: './edit-art.component.html',
  styleUrls: ['./edit-art.component.css']
})
export class EditArtComponent implements OnInit {

  articulo;
  articulos;
  idActual;

  constructor(private crudS: CrudService, private formB: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getArticulos();
  }

  getArticulos(){
    this.crudS.getArticulos().subscribe(
      (data:any)=>{
        this.articulos = data.data;
        console.log(this.articulos);
      }
    )
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

  eliminarArt(id){
    const alerta = document.getElementById('alerta');
    console.log("eliminado desde la consola");
    alerta.style.display = 'block';

    this.crudS.eliminarArt(id).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }

  getId(id){
    this.idActual=id;
    console.log(this.idActual);
  }


  editArticulo(){    
    console.log(this.articulo.value);
    this.crudS.updateArt(this.articulo.value, this.idActual).subscribe(
      (data:any)=>{
        console.log(data);
        // if(data.message){
        //   // this.editadoBien();
        // }else{
        //   console.log("no hay");
        // }
      }
    )
  }

  reload(){
    window.location.reload();
  }

  addPrecio(){
    const precios = this.articulo.get('precios') as FormArray;
    const precioo = this.formB.group({
      precio: [null]
    })
    precios.push(precioo);
  }

}
