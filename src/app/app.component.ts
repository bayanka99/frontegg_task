import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FronteggAppService, FronteggAuthService, ContextHolder} from "@frontegg/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy {
  isLoading = true;
  loadingSubscription: Subscription;
  user?: any;


  constructor(private fronteggAuthService: FronteggAuthService, private fronteggAppService: FronteggAppService) {
    this.loadingSubscription = fronteggAppService.isLoading$.subscribe((isLoading) => this.isLoading = isLoading)
  }
  ngOnInit(): void {
    this.fronteggAuthService?.user$.subscribe((user) => {
      this.user = user
    })
  }

  openSettings():void{
        this.fronteggAppService?.showAdminPortal()

  }

  loginWithRedirect(): void {
    this.fronteggAuthService.loginWithRedirect();
  }

  logOut(): void {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe()
  }

  showApp(): void {
    this.fronteggAppService?.showAdminPortal()
  }
}