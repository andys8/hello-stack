import { Component } from "@angular/core";

@Component({
  selector: '#app__angular',
  template: '<div>Hello, I\'m {{name}}.</div>'
})
export class AppComponent {
  name: String = "Angular";
}