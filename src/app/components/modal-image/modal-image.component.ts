import { Component,Input ,ElementRef,ViewChild ,Renderer2} from '@angular/core';
import { Image } from '../../interfaces/response-search-images';
import { fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-image.component.html',
  styleUrl: './modal-image.component.css'
})
export class ModalImageComponent {


  @Input() imageData!:Image;


  @ViewChild('modalMask') modalMask!:ElementRef;

  public hidden = true;
 
  constructor(
    private renderer:Renderer2){
      
    }

    ngAfterViewInit(){
      const modal_mask = this.modalMask.nativeElement;
      const modalMask$ = fromEvent(modal_mask,'click');

      modalMask$.subscribe((event:any)=>{
        const target = event.target as HTMLElement;
        if (target.classList.contains('modal-image-mask')) {
          this.cerrarModal();
        }
      })
    }
    ngOnInit():void{
 
    }

    ngOnChanges() {
      this.calcularVariaciones();
      this.abrirModal();
    }

    abrirModal(){
      if(this.imageData != undefined){
        setTimeout(()=>{
          this.hidden = false;
        },500)
      }
    }

    cerrarModal(){
      this.hidden = true;
    }


    calcularVariaciones(){
      if(this.imageData != undefined){

        const ancho_original = Number(this.imageData.width)
        const alto_original = Number(this.imageData.height)
        this.imageData['resoluciones'] = {
          s:"",
          m:"",
          l:""
        }

      this.imageData.resoluciones.l = ancho_original >= 2400 ? this.calcularRescalado(2400,ancho_original,alto_original) : "";
      this.imageData.resoluciones.m = ancho_original >= 1920 ? this.calcularRescalado(1920,ancho_original,alto_original) : "";
      this.imageData.resoluciones.s = ancho_original >= 640 ? this.calcularRescalado(640,ancho_original,alto_original) : "";

      }

    }

    calcularRescalado(ancho_objetivo:number,ancho_original:number,alto_original:number){
      
      const rel_escalado = ancho_objetivo/ancho_original;
      const alto_objetivo = Math.floor(rel_escalado * alto_original);

      return `${ancho_objetivo} x ${ alto_objetivo }` 
    }


}
