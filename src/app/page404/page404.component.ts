import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-Page404',
  templateUrl: './Page404.component.html',
  styleUrl: './Page404.component.css'
})
export class Page404Component implements OnInit{

  backgroundColor: string = 'chartreuse';

  ngOnInit(): void {
    this.cestLaFete();
  }

  cestLaFete() {
    setInterval(() => {
      this.backgroundColor = this.couleurRandom();
    }, 500);
  }

  private couleurRandom(): string{
    const min= 0, max = 255;

    const red= Math.floor(Math.random()*(max-min+1)+min)
    const green= Math.floor(Math.random()*(max-min+1)+min)
    const blue= Math.floor(Math.random()*(max-min+1)+min)

    return `rgb(${red}, ${green}, ${blue})`
  }

}
