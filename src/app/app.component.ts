import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }

  // first ans start
  valueArray = [2, 3, 10, 15, 26, 35, 50, 63]
  stringValue: any
  matchedValue: any
  findString(value: any) {
    for (let i = 0; i < this.valueArray.length; i++) {
      const element = this.valueArray[i];
      if (value == i) {
        this.matchedValue = element
      }
    }
  }
  // first ans end



  // Third ans start
  fristValue:any
  values = [] as  any;

  removeValue(i: any) {
    this.values.splice(i, 1)
  }

  addValue() {
    this.values.push({ value: "" });
  }
  submitValue(){
    console.log(this.fristValue,this.values);
    
  }

// Fourth Ans Start
inputValue:any


}
