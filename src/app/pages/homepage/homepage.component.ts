import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
@Component({
  selector: "app-homepage",
  styleUrls: ["homepage.component.scss"],
  templateUrl: "homepage.component.html"
})
export class HomepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  private querySubscription: Subscription;
  loading: boolean;

  constructor(public data: DataService,
    private apollo: Apollo
    //protected $gaService: GoogleAnalyticsService
    ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");

    //this.querySubscription.unsubscribe();
  }

  GetQuery(){
    return gql`
  query MyQuery {
    products(
      order_by: {price: asc}, 
      ) {
      id
      img
      name
      price
    }
  }
`;
  }



  LoadRemoteData(){

    
    let query = this.GetQuery();

    this.querySubscription = this.apollo.watchQuery<any>({
      query
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;

        // if(bIncremental){
        //   data.products.forEach(p => {
        //     this.arrProducts.push(p);
        //   });
        // }
        // else{
        //   this.arrProducts = data.products;
        // }
      });
  }

  // ga(category,action) {
  //   this.$gaService.event(action, category);
  // }
}
