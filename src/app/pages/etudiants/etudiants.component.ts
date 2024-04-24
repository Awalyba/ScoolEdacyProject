import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cours, etudiant } from '../models.interface';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class etudiantsComponent implements OnInit {

  @Input() cours: Cours[] = []
  @Input() etudiants!: etudiant | null

  @Output() newetudiants = new EventEmitter<etudiant>();
  @Output() editetudiants = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

firstName: any;
lastname: any;
classeCours: any;
headerLabel: string = 'ADD A NEW etudiants';
butttonLabel: string = 'ADD etudiants';

  ngOnInit(): void {
      console.log("ALL COURSES: ", this.cours)
      this.etudiants?.name? this.headerLabel = 'EDIT etudiants INFORMATION':''
      this.etudiants?.name? this.butttonLabel = 'EDIT etudiants':''
      if(this.etudiants?.name){
        this.firstName = this.etudiants.name.split(' ')[0]
        this.lastname = this.etudiants.name.includes(' ')? this.etudiants.name.split(' ')[1]:''
        this.classeCours = this.etudiants.coursId
      }
  }

addEditetudiants() {
  console.log('ADD EDIT etudiants METHOD: ', this.firstName, this.lastname, this.classeCours, this.etudiants)
  if (this.firstName && this.lastname && this.classeCours !== null) {
    if(this.etudiants?.name){
      console.log('EDITING etudiants: ', this.etudiants.name)
      this.editetudiants.emit({oldetudiants: this.etudiants, newetudiants: {
        name: `${this.firstName} ${this.lastname}`,
        courseId: this.classeCours
      }})

    } else {
      this.newetudiants.emit({
      name: `${this.firstName} ${this.lastname}`,
      coursId: this.classeCours
    })
    }

    this.cours.push(newetudiant);
    this.firstName = '';
    this.lastname = '';
    this.classeCours = '';
  }
}

cancel() {
  console.log("ADMIN WANTS TO CANCEL: ")
  this.onCancel.emit(true)

}
}
