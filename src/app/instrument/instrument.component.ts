import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrument',
  imports: [ReactiveFormsModule],
  templateUrl: './instrument.component.html',
  styleUrl: './instrument.component.css',
})
export class InstrumentComponent {
  instruments:any
  instrumentForm :any

  constructor(
    private builder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(){
    this.instrumentForm = this.builder.group({
      name : "",
      type : "",
      item_number : "",
      price : "",
      category : "",
    })
  }
  
  save(){
    console.log(this.instrumentForm.value)
    this.router.navigate(['/note'])
    
  }
}
