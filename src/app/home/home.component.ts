import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private db: AngularFireDatabase){}

  addWiki(data: NgForm){
    this.db.list("/post").push(data.value);
  }
}
