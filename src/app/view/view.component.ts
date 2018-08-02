import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }
	name:String="shubham"
	brief:String="test"
	address:String="test2"
	cardImage:String="https://pbs.twimg.com/profile_images/840431423442030592/GO-uH2qC_400x400.jpg"	
  ngOnInit() {
  }

}
