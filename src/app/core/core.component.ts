import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '@shared/services/environment.service';
import { Backend } from 'src/environments/models/backend';

@Component({
  selector: 'migs-tech-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  backends: Backend[];

  constructor(
    private environmentService: EnvironmentService
  ) { }

  ngOnInit(): void {
    this.backends = this.environmentService.tokenBackends;
  }

}
