import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleUpdateService {

  constructor() { }
  titelSet(){
    
  }
  // this.router.events.subscribe(event => {
  //   if (event instanceof NavigationEnd) {
  //     const title = this.getTitleFromRoute(this.router.routerState.root);
  //     this.titleService.setTitle(title);
  //   }
  // });

  // private getTitleFromRoute(route: ActivatedRoute): string {
  //   let child = route.firstChild;
  //   while (child) {
  //     if (child.firstChild) {
  //       child = child.firstChild;
  //     } else if (child.snapshot.data && child.snapshot.data.title) {
  //       return child.snapshot.data.title;
  //     } else {
  //       return 'Default Title';
  //     }
  //   }
  //   return 'Default Title';
  // }

  // const routes: Routes = [
  //   {
  //     path: 'home',
  //     component: HomeComponent,
  //     data: { title: 'Home' }
  //   },
  //   {
  //     path: 'about',
  //     component: AboutComponent,
  //     data: { title: 'About' }
  //   },
  //   // Other routes
  // ];
}
