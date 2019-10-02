import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
    ngOnChanges() {
    console.log("parent ngOnChanges");
  }

  ngOnInit() {
    console.log("parent ngOnInit");
  }

  ngDoCheck() {
    console.log("parent ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("parent ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("parent ngAfterContentChecked");
  }

  ngAfterViewInit() {
    debugger;
    console.log("parent ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("parent ngAfterViewChecked");
  }

  ngDestroy() {
    console.log();
  }
}
