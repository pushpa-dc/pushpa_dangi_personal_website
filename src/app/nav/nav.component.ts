import { Component, OnInit } from "@angular/core";
import { Platform } from "@angular/cdk/platform";

// declare var matchMedia;
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  isMobile = false;
  isActive = false;
  isCollapsed;
  constructor(private platform: Platform) {}

  ngOnInit() {
    if (this.platform.ANDROID || this.platform.IOS) this.isMobile = true;
  }
}
