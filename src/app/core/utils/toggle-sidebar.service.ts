import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleSidebarService {
  private _toggleSidebar: Subject<boolean> = new Subject<boolean>();

  isSidebarVisible = this._toggleSidebar.asObservable();

  constructor() {}

  setSidebarVisibility(sidebarVisibility: boolean) {
    this._toggleSidebar.next(sidebarVisibility);
  }
}
