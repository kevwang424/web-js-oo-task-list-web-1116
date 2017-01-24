'use strict';
// List Model

class List{

  constructor(title){
    this.title = title
    this.tasks = []
    List.all.push(this)
    this.id = List.all.length
  }

}

List.all = []
