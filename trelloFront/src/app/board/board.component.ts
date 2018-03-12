import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service';
import {CardService} from '../services/card.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor(
    private listService:ListService,
    private cardService:CardService
    ) {
  }
  lists;
  newList:Object={title:''};

  ngOnInit() {
    this.getLists();
  }

  addNewCard(title,list){
    const newCard = {
      title,
      list:list._id
    };
    this.cardService.postNewCard(newCard)
    .subscribe(card=>{
      list.cards.push(card);
      this.updateList(list);
    })
  }

  deleteList(list){
    if(!confirm("seguro que decea borrar?"))return;
    this.listService.deleteList(list)
    .subscribe(res=>{
      console.log(res);
      this.getLists();
    })
  }

  updateList(list){
    list.editing = false;
    this.listService.updateList(list)
    .subscribe(updatedList=>{
      //console.log(this.lists)
     this.lists = this.lists.map(l=>{
       if(l._id !== updatedList._id) return l;
        else return updatedList;
     });
     this.getLists();

    })
    
  }

  editList(list){
    list.editing = true;
    this.lists = this.lists.map(l=>{
     if(l._id!==list._id) return l;
     else return list;
    });
  }

  getLists(){
    this.listService.getLists()
    .subscribe(lists=>{
      
      this.lists = lists;
      //console.log(this.lists)
    });
  }

  addNewList(newList){
    if(Object.keys(newList).length<1) return;
    if(newList.title.length<1) return;
    this.listService.postNewList(newList)
    .subscribe(res=>{
      this.getLists();
    });
  }

}
