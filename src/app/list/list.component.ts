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
  location = [];
  tags = [];
  loading=true;
  name="shubham"
  powers: any = [];
  // powers = [{
  // name:"shubham",
  // card:"https://specials-images.forbesimg.com/imageserve/593b2e4b31358e03e55a0e8c/416x416.jpg?background=000000&cropX1=634&cropX2=2468&cropY1=39&cropY2=1874",
  // brief:"text"
  // },
  // {
  // name:"shubham",
  // card:"https://specials-images.forbesimg.com/imageserve/593b2e4b31358e03e55a0e8c/416x416.jpg?background=000000&cropX1=634&cropX2=2468&cropY1=39&cropY2=1874",
  // brief:"text"
  // },
  // {
  // name:"shubham",
  // card:"https://specials-images.forbesimg.com/imageserve/593b2e4b31358e03e55a0e8c/416x416.jpg?background=000000&cropX1=634&cropX2=2468&cropY1=39&cropY2=1874",
  // brief:"text"
  // }
  // ]
  ngOnInit() {
  this.listService.fetchList().subscribe((data: any) =>{
  this.powers = data;
  this.loading = false;
  console.log(this.powers,this.loading)
  })

  this.listService.fetchLocation().subscribe((data: any) =>{
    this.location = data;
    console.log(this.location)
    })
    this.listService.fetchTags().subscribe((data: any) =>{
      this.tags = data;
      console.log(this.tags)
      })

  }

}
