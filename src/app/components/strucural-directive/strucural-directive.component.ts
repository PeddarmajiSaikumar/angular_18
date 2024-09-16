import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-strucural-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strucural-directive.component.html',
  styleUrl: './strucural-directive.component.css'
})
export class StrucuralDirectiveComponent {

  isDiv1Visible:boolean=true;

  showDiv1(){
    this.isDiv1Visible=true;
  }

  hideDiv1(){
    this.isDiv1Visible=false;
  }

}
