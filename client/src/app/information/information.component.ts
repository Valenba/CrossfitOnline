import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  information: Array<Object>;
  name;
  constructor(private informationService : InformationService) { 
  }
  
  ngOnInit() {

  }
  athletes(name){
   
    this.informationService.getByName(name).subscribe(athletes=>(this.information = athletes))
    
  }
}