import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  public openGithub() {
    window.open("https://github.com/evheath/civfinder", "_blank")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
