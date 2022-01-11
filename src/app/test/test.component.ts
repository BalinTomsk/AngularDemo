import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Constantine";
  public siteUrl = window.location.href;
  public isDisabled = false;
  public myId = "testId";

  constructor() { }

  ngOnInit(): void {
  }
  greetUser()
  {
    return "hello : " + this.name;
  }

}
