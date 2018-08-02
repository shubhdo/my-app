import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  location:[] = ["location1","location2"]
  name="shubham"
  powers:any = [{
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
  }

}
