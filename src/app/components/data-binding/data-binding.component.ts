import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {


  /* In TypeScript there are four types of Data Types
    They are:
      1.String
      2.Number
      3.Boolean
      4.date 
  */

      courseName:String="Angular v18";
      inpuType="checkBox";
      rollNo:number=21;
      isIndian:boolean=true;
      currentDate:Date=new Date();
      myClassName:string="bg-primary";
      stateName:string="";
      firstName=signal('Saikumar Peddarmaji');

      constructor(){
        
      }

      showAlert(message:string){
        alert(message);
      }

      changeCourseName(){
        this.courseName="React Js";   
        this.firstName.set("Dileep")  //Signal Method
      }

}