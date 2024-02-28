import { Component, Input } from '@angular/core';
import { Topic } from '../../interfaces/response-topics';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-topic-collection',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './topic-collection.component.html',
  styleUrl: './topic-collection.component.css'
})
export class TopicCollectionComponent {


  @Input({required:true}) topic!:Topic;




}
