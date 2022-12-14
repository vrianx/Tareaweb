import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre: string = 'Julio';
  cosa: boolean = false;
  sad: boolean = false;
  crazy: boolean = false;
  public contador: number = 0;
  public scroll: number = 0;
  public alto: number = 300;
  public ancho: number = 300;
  public mostrar: boolean = false;
  public color: string = "";
  public imagen: string = 'data:image/jpeg;base64,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'
  public sumar(n1: number, n2: number): number {
    return n1 + n2;
  }
  public eventoBoton(event: Event): void {
    console.log(event);
    alert('Hola');
  }
  public aumentarContador(): void {
    this.contador = this.contador + 1;
  }
  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }
  public capturarAlto(event: Event): void{
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }
  public capturarAncho(event: Event): void{
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.ancho = valor;
  }
  public capturarColor(event: Event):void{
    const color = (event.target as HTMLInputElement).value;
    this.color = color;
  }
}

