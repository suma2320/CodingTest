import { Component, OnInit } from '@angular/core';
import { PodcastResponse } from 'src/app/model/podcast.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  podcastResponse: PodcastResponse[] = require('../../data/podcast-data.json');
  constructor() { }

  ngOnInit(): void {
  }

}
