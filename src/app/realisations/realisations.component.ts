import { Component, OnInit } from '@angular/core';
import { RealService } from './../real.service';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent implements OnInit {

  constructor(public realService: RealService) { }

  ngOnInit() {
    //console.log(this.realService.listreals);
  }

}
