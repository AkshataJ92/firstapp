import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dt:Date=new Date(2019,6,30);
  num:number=1.2345678;
  flag:boolean=true;
  dept_id:number;
  id:string='';
  title:string='';
  status:string='';
  arrtask:Task[]=[
    new Task('1','push your code to github','done'),
    new Task('2','learn angular','pending')
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteTask(item:Task){
    //console.log(item);

    this.arrtask.splice(this.arrtask.indexOf(item),1);
  }
  onAddTaskClick(){

      this.arrtask.push(new Task(this.id,this.title,this.status));
  }

  EditTask(item:Task){
    if(item.status=='pending'){
    item.status='done';
    }
    else
    item.status='pending';

  }

}
