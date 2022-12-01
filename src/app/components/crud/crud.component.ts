import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { categoria } from '../../models/interfaces';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  categoria: FormGroup;

  constructor(private crudS: CrudService) { }

  ngOnInit(): void {
    this.createForm();
  }

  get categoriaInvalida(){
    return this.categoria.get('clave').invalid && this.categoria.get('clave').touched
  }

  get nombreInvalido(){
    return this.categoria.get('nombre').invalid && this.categoria.get('nombre').touched
  }

  createForm(){

    let tiempo = Date.now();

    this.categoria = new FormGroup({
      clave: new FormControl('', Validators.required),
      fechaCreado: new FormControl(tiempo, Validators.required),
      nombre: new FormControl('', Validators.required)
    })
  }

  send(){
    console.log(this.categoria.value);
    const alerta = document.getElementById('alerta');    

    this.crudS.envioInf(this.categoria.value).subscribe(
      (data:any)=>{
        console.log(data);
        alerta.style.display = 'block';
      }
    )
  }
}
