import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cours } from '../models.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
cancel() {
    console.log("ADMIN WANTS TO CANCEL: ")
}

@Input() cours!: Cours
@Output() coursEditEvent = new EventEmitter<Cours>()
buttonLabel: string = 'ADD CLASS';
headerLabel: string = 'ADD A NEW CLASS';

name!: string;
  startDate!: string;
  endDate!: string;
  coursId!: number;



  ngOnInit(): void {
    console.log('value of cours: ', this.cours)
    this.buttonLabel =this.cours.name!==''? 'MODIFY CLASS':'ADD CLASS'
    this.headerLabel =this.cours.name!==''? 'EDIT CLASS DETAILS':'ADD A NEW CLASS'
    this.name = this.cours.name
    this.startDate = this.cours.startDate
    this.endDate = this.cours.endDate
    this.coursId = this.cours.coursId
  }

  addModifyClassecours(){
    console.log('ADD OR MODIFY CLASS cours -->', this.cours)
    this.cours.name = this.name
    this.cours.startDate = this.startDate
    this.cours.endDate = this.endDate
    this.coursEditEvent.emit(this.cours)
  }

}
