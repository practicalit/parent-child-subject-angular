import { Component, OnInit, Input } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  sample:FormGroup;

  @Input() notify: Subject<string>;

  ngOnInit(){
    this.sample = new FormGroup({
      'userData': new FormGroup({
          'username':new FormControl(null,[Validators.required]),
          'email':new FormControl(null,[Validators.required,Validators.email]),
      })
    });

    this.sample.setValue({
      'userData':{
        'username':'sample',
        'email':'sample@thepracticalit.com'
      }
    });

    this.notify.subscribe(data => { 
      this.sample.controls.userData.get("username").setValue(data);
      this.sample.controls.userData.get("email").setValue("subject " + data);
   });
  }

}
