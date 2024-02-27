import { Component, OnInit } from '@angular/core';
import { IsLoadingBarService } from './interceptor/loadingBar/service/IsLoadingBar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  
  constructor(
    private loadingBarService: IsLoadingBarService
  ) { }

  ngOnInit(): void {
    this.loadingBarService.getLoadingState()
      .subscribe((state: boolean) => {
        this.isLoading = state;
      });
  }
}
