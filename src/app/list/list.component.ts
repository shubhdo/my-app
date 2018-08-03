import { Component, OnInit } from '@angular/core';
import {
  ListService
} from '../services/dataService'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }
  location = ["location1","location2"]
  name="shubham"
  powers = [{
  name:"shubham",
  cardImage:"https://pbs.twimg.com/profile_images/840431423442030592/GO-uH2qC_400x400.jpg",
  brief:"text"
  },
  {
  name:"shubham",
  cardImage:"https://pbs.twimg.com/profile_images/840431423442030592/GO-uH2qC_400x400.jpg",
  brief:"text"
  },
  {
  name:"shubham",
  cardImage:"https://pbs.twimg.com/profile_images/840431423442030592/GO-uH2qC_400x400.jpg",
  brief:"text"
  }
  ]
  ngOnInit() {
  this.listService.fetchList().subscribe(function (data) {
  console.log(data)
  })

  }

}
