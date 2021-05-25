import { Component,OnInit } from '@angular/core';
import { Subject }  from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //subject for the view
  notify: Subject<string> = new Subject();

  ngOnInit() {

  }

  /**
   * Handler to be called everytime the button is clicked
   */
  handler() {
    //if you want to assign blank then assign blank
    //pass blank here.
    this.notify.next(Date.now().toString());
  }
}
