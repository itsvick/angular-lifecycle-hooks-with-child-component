import { Component } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <h1>CHild Component view loaded</h1>
  `
})
export class ChildComponent {
  name = "Angular";
  ngOnChanges() {
    console.log("child ngOnChanges");
  }

  ngOnInit() {
    console.log("child ngOnInit");
  }

  ngDoCheck() {
    console.log("child ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("child ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("child ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("child ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("child ngAfterViewChecked");
  }

  ngDestroy() {
    console.log();
  }
}
