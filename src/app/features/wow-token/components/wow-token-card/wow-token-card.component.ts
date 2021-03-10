import { Component, Input, OnInit } from '@angular/core';
import { WowToken } from '../../models/wow-token';

@Component({
  selector: 'migs-tech-wow-token-card',
  templateUrl: './wow-token-card.component.html',
  styleUrls: ['./wow-token-card.component.scss']
})
export class WowTokenCardComponent implements OnInit {
  @Input() token: WowToken;

  constructor() { }

  ngOnInit(): void { }

}
