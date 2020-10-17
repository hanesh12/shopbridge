import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopbridge';

  showHead: boolean = false;
  sidebar: boolean = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/') {
            this.showHead = false;
            this.sidebar = false;
            //console.log("false");
          } else {
            //console.log("true");
            this.showHead = true;
            this.sidebar = true;
          }
        }
      });
    }
}
