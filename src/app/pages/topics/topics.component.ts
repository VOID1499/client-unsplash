import { Component, OnInit, inject } from '@angular/core';
import { TopicCollectionComponent } from '../../components/topic-collection/topic-collection.component';
import { TopicsService } from '../../services/topics.service';
import { Topic } from '../../interfaces/response-topics';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule, TopicCollectionComponent],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export default class TopicsComponent implements OnInit {

  private _topicsService = inject(TopicsService);

  public topics!:Topic[];

  constructor(){

    this._topicsService.getTopics().subscribe(topics =>{
      this.topics = topics;
      console.log(this.topics)
    })

  }

  
  ngOnInit(): void {

  }

}
