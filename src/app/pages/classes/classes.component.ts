import { Component, OnInit } from '@angular/core';
import { Cours, etudiant } from '../models.interface';
import { CoursComponent } from '../cours/cours.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  cours: Cours[] = [
    {
      name: 'Terminal S1',
      startDate: '2023-04-01',
      endDate: '2024-01-30',
      coursId: 0,
      etudiants: [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'David'}, {name: 'Eve'}]
    },
    {
      name: 'Terminal S2',
      startDate: '2023-04-01',
      endDate: '2024-01-30',
      coursId: 1,
      etudiants: [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'David'}, {name: 'Eve'}]
    },
    {
      name: 'Terminal L1',
      startDate: '2023-04-01',
      endDate: '2024-01-30',
      coursId: 2,
      etudiants: [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'David'}, {name: 'Eve'}]
    },
    {
      name: 'Terminal L2',
      startDate: '2023-04-01',
      endDate: '2024-01-30',
      coursId: 3,
      etudiants: [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'David'}, {name: 'Eve'}]
    },
    {
      name: 'Terminal G1',
      startDate: '2023-04-01',
      endDate: '2024-01-30',
      coursId: 4,
      etudiants: [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'David'}, {name: 'Eve'}]
    }
  ];

  selectedcours: Cours | null |undefined= null;
  isAddingEditingetudiant = false;
  isAddingEditingClass = false;
selectedetudiant!: etudiant |null;
  ngOnInit(){

  }

addcours() {
  this.isAddingEditingetudiant = true
  this.isAddingEditingClass = false
  console.log('USER WANTS TO ADD A cours: ')
}

addClass(){
  this.selectedcours = null
  this.selectedetudiant = null
  this.isAddingEditingClass = true;
  this.isAddingEditingetudiant = false
}

  selectcours(cours: Cours) {
    this.selectedcours = cours;
    this.isAddingEditingetudiant = false;
    this.isAddingEditingClass = false;
  }

addetudiantToClass($event: any) {
console.log('ADMIN WANTS TO ADD A etudiant TO A CLASS: ', $event)
this.isAddingEditingetudiant = false;
 this.cours[$event.coursId].etudiants.push($event)
 this.selectedcours = this.cours.find(e=>e.coursId == $event.coursId)
 console.log("NEW etudiant ADDED TO cours: ", this.cours[$event.coursId])
}

editetudiantInClass($event: any){
  console.log('ADMIN WANTS TO EDIT A etudiant IN CLASS: ', $event)
  const etudiant = $event.oldetudiant;
  const newetudiant = $event.newetudiant;
  this.isAddingEditingetudiant = false;

  if(etudiant.coursId !== newetudiant.coursId){
    this.cours[etudiant.coursId].etudiants.filter(e=>e.name!== etudiant.name)
    this.cours[newetudiant.coursId].etudiants.push(newetudiant)
    this.selectedcours = this.cours.find(e=>e.coursId == newetudiant.coursId)

  } else {
    let ind = etudiant.coursId;

    let s = this.cours[ind].etudiants.findIndex(e=>e.name == etudiant.name)
    console.log("S--->", s, ind, etudiant.name, this.cours[ind], this.cours[ind].etudiants)
    this.cours[ind].etudiants[s] = newetudiant
    this.selectedcours = this.cours[ind]
  }
}

oncoursditAdd($event: any) {
  console.log('ADMIN WANTS TO ADD A CLASS: ', $event)
  this.isAddingEditingClass = false;
  this.isAddingEditingetudiant = false;
  const cours : CoursComponent = $event;
  if(this.cours.filter(e=>e.coursId == cours.coursId)){
    this.cours[cours.coursId] = cours;
  } else this.cours.push(Cours)
}

editClass(selectedcours: any){
  console.log('ADMIN WANT TO EDIT A CLASS: ', selectedcours)
  this.isAddingEditingClass = true;
  this.isAddingEditingetudiant = false;

}

editetudiant(etudiant: etudiant, cours: CoursComponent) {
  console.log('ADMIN WANTS TO EDIT etudiant')
  this.selectedetudiant = etudiant;
  this.isAddingEditingetudiant = true;
  this.isAddingEditingClass = false;
  this.selectedetudiant.coursId = cours.coursId

}
}
