import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ClimaService } from '../../services/clima.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  city=''
  temp=0
  humedad=0
  pais=''
  icono=''
  error=false
  resultado=false
  ciudad=''
  constructor(private _ngb:NgbModal,private _clima:ClimaService) { }

  ngOnInit(): void {
  }
  modal(contenido:any){
    this._ngb.open(contenido,{centered:true,scrollable:true})
  }
  buscar(){
    console.log('buscando');
    this._clima.obtenerClima(this.city).subscribe(response=>{
      this.resultado=true
      this.error=false
      console.log(response);
      this.temp=response.main.temp/10
      this.humedad=response.main.humidity
      this.pais=response.sys.country
      this.ciudad=response.name
    },()=>{
      this.resultado=false
      this.error=true
      setTimeout(() => {
        this.city=''
      }, 1000);
    })
  }

}
