import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';

  posi = "";
  disp = "none";
  navFunc(){
    this.posi = "0vw";
    this.disp = "block"
  }
  xFunc(){
    this.posi = "-90vw";
    this.disp = "none";
  }
}
