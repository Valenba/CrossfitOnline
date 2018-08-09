import { Component, OnInit } from '@angular/core';
import { VideoExerciseService } from '../../services/videoExercise.service';

@Component({
  selector: 'app-videoExercise',
  templateUrl: './videoExercise.component.html',
  styleUrls: ['./videoExercise.component.scss']
})
export class VideoExerciseComponent implements OnInit {
  url: String;

  constructor(private videoExeciseService : VideoExerciseService) { }

  ngOnInit() {
  }
  exercise(url){
    this.videoExeciseService.getExercise(url).subscribe(exercises=>(this.url = exercises))
  }

}
