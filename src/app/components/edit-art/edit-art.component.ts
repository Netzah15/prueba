import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-edit-art',
  templateUrl: './edit-art.component.html',
  styleUrls: ['./edit-art.component.css']
})
export class EditArtComponent implements OnInit {

  articulo;
  articulos;

  constructor(private crudS: CrudService) { }

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
      precios: new FormGroup({
        precio: new FormControl('')
      }),
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

  editArticulo(){
    console.log(this.articulo.value);
  }

  reload(){
    window.location.reload();
  }

}
