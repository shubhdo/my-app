import { Component, OnInit } from '@angular/core';
import {
  ListService
} from '../services/dataService'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private listService: ListService) { }
	name:String="shubham"
	brief:String="test"
  address:String="test2"
  id:String=''
	cardImage:String="https://pbs.twimg.com/profile_images/840431423442030592/GO-uH2qC_400x400.jpg"
  ngOnInit() {
    this.listService.fetchContractor(this.id).subscribe((data: any) =>{
      console.log(data)
    })
  }


}
