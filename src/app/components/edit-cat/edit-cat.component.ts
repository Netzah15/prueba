import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {

  constructor(private crudS: CrudService) { }

  categorias;
  categoria;
  idActual;

  ngOnInit(): void {
    this.getCategorias();
    this.createForm();
  }

  getCategorias(){
    this.crudS.getCategorias().subscribe(
      (data:any)=>{
        this.categorias = data.data;
        console.log(this.categorias);
      }
    )
  }

  eliminarCat(id){
    console.log(id);
    
    const alerta = document.getElementById('alerta');
    console.log("eliminado desde la consola");
    alerta.style.display = 'block';
    
    this.crudS.eliminarCat(id).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )    
  }

  createForm(){
    let tiempo = Date.now();

    this.categoria = new FormGroup({
      clave: new FormControl('', Validators.required),
      fechaCreado: new FormControl(tiempo, Validators.required),
      nombre: new FormControl('', Validators.required)
    })
  }

  getId(id){
    this.idActual=id;
    console.log(this.idActual);
  }

  update(){    
    console.log(this.categoria.value);
    this.crudS.updateCat(this.categoria.value, this.idActual).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.message){
          this.editadoBien();
        }else{
          console.log("no hay");
        }
      }
    )
  }

  editadoBien(){
    const alerta = document.getElementById('alertaEdit');
    alerta.style.display = 'block';
  }

  reload(){
    window.location.reload();
  }

}
