import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isEquipmentSubMenuOpen: boolean = false;
  isSettingsSubMenuOpen: boolean = false;
  isUserSubMenuOpen: boolean = false;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.setSubMenuOpen(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setSubMenuOpen(event.url);
      }
    });
  }

  private setSubMenuOpen(activeUrl: string) {
    if (activeUrl.includes('equipment')) {
      this.setEquipmentSubMenuOpen(true);
    } else if (activeUrl.includes('settings')) {
      activeUrl.includes('user-profile') ?
        this.setUserSubMenuOpen(true) :
        this.setSettingsSubMenuOpen(true);
    }
  }

  setEquipmentSubMenuOpen(isOpen: boolean) {
    this.isEquipmentSubMenuOpen = isOpen;
    this.isSettingsSubMenuOpen = false;
    this.isUserSubMenuOpen = false;
  }

  setSettingsSubMenuOpen(isOpen: boolean) {
    this.isSettingsSubMenuOpen = isOpen;
    this.isEquipmentSubMenuOpen = false;
    this.isUserSubMenuOpen = false;
  }

  setUserSubMenuOpen(isOpen: boolean) {
    this.isUserSubMenuOpen = isOpen;
    this.isEquipmentSubMenuOpen = false;
    this.isSettingsSubMenuOpen = false;
  }

  logout() {

  }

}
