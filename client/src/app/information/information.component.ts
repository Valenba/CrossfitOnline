import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { GraficaService } from '../../services/grafica.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  information: Array<Object>;
  name1;
  name2;
  canvas:any = {};
  public chart = [];

  constructor(private informationService : InformationService, public graficaService : GraficaService) { 
  }
  
  ngOnInit() {
    

  }
  athletes(name,names){
   
    this.informationService.getByName(this.name1).subscribe(athletes=>{(this.information = athletes.splice(0))
    this.informationService.getByName(this.name2).subscribe(athletes=>{(athletes.forEach(e=>{
      this.information.push(e);
      console.log(this.information);
      this.graficaService.compareAthletes(this.information[0],this.information[1]);
    }))}
    )})
  
  }
}