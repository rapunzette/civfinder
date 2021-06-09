import { Component, OnInit } from '@angular/core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faCopyright = faCopyright;

  public copyright = "Age of Empires II © Microsoft Corporation. Civfinder was created under Microsoft's \"Game Content Usage Rules\" using assets from Age of Empires II, and it is not endorsed by or affiliated with Microsoft."

  public openGithub() {
    window.open("https://github.com/evheath/civfinder", "_blank")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
