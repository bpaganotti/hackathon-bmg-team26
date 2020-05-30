import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from 'src/app/services/data.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
@Component({
  selector: "app-homepage",
  templateUrl: "homepage.component.html"
})
export class HomepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor(public data: DataService,
    protected $gaService: GoogleAnalyticsService
    ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }

  ga(category,action) {
    this.$gaService.event(action, category);
  }
}
