import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component(
  {
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
  }
)
export class AppComponent
{
  newMemberName='';
  members: string[] = [];
  errorMessage='';
  numberOfTeams:number|''="";
  teams:string[][]=[]
  

  onInput(member:string){
    this.newMemberName=member;
    
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams=Number(value);
  }

  addMember(){

  if(!this.newMemberName){
    this.errorMessage="Name Cant be empty";
    return;
  }
  
   this.errorMessage='';
   this.members.push(this.newMemberName);
   this.newMemberName="";
   
  }

  genarateTeams(){

    if(!this.numberOfTeams || this.numberOfTeams <=0){
      this.errorMessage="Invalid Number of Teames";
      return;
    }

    if(this.members.length < this.numberOfTeams){
      this.errorMessage="Not Enough Members..!!";
      return;
    }

    this.errorMessage='';
    const allMembers=[...this.members]

   while(allMembers.length){
    for(let i=0; i< this.numberOfTeams;i++){
      const randomIndex=Math.floor(Math.random()*allMembers.length)
      const member=allMembers.splice(randomIndex,1)[0];

      if(!member)break;

      if(this.teams[i]){
        this.teams[i].push(member);
      }
      else{
        this.teams[i]=[member];
      }
      
    }
   }
  this.numberOfTeams='';
  this.members=[];

 
  }
}
