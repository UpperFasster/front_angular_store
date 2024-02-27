import { ChangeDetectorRef, Injectable, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class IsLoadingBarService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }
  
  setLoadingState(state: boolean): void {
    setTimeout(() => {
      this.loadingSubject.next(state);
    }, 0);
  }
  
  getLoadingState(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }
}
