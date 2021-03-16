import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from "@angular/animations";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [
    trigger("flyInOut", [
      state(
        "in",
        style({ width: 400, transform: "translateX(0)", opacity: 1 })
      ),
      transition("void => *", [
        style({ width: 400, transform: "translateX(50px)", opacity: 0 }),
        group([
          animate(
            "0.3s 0.1s ease",
            style({
              transform: "translateX(0)",
              width: 400
            })
          ),
          animate(
            "0.3s ease",
            style({
              opacity: 1
            })
          )
        ])
      ]),
      transition("* => void", [
        group([
          animate(
            "0.3s ease",
            style({
              transform: "translateX(50px)",
              width: 400
            })
          ),
          animate(
            "0.3s 0.2s ease",
            style({
              opacity: 0
            })
          )
        ])
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
