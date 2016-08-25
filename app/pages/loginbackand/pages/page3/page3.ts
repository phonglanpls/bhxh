import {Component} from '@angular/core';
import {BackandService} from '../../services/backandService'

@Component({
  templateUrl: 'build/pages/loginbackand/pages/page3/page3.html',
   providers: [BackandService]
})
export class Page3 {
	name:string = 'World';
    description:string = 'Wonderful';
    private items:any[] = [];
    searchQuery: string;

    constructor(public backandService:BackandService) {   
        this.searchQuery = '';
    }

    public postItem() {
        
        this.backandService.postItem(this.name, this.description).subscribe(
                data => {
                    // add to beginning of array
                    this.items.unshift({ id: null, name: this.name, description: this.description });
                    console.log(this.items);
                    this.name = '';
                    this.description = '';
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );;
    }

    public getItems() {
       this.backandService.getItems()
            .subscribe(
                data => {
                    console.log("subscribe", data);
                    this.items = data;
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
    }

    public filterItems(searchbar) {
        // set q to the value of the searchbar
        var q = searchbar;

        // if the value is an empty string don't filter the items
        if (!q || q.trim() == '') {
          return;
        }
        else{
            q = q.trim();
        }

        this.backandService.filterItems(q)
            .subscribe(
                data => {
                    console.log("subscribe", data);
                    this.items = data;
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
    }

}