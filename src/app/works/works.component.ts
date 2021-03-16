import { Component, OnInit } from "@angular/core";
import {
  state,
  trigger,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";
@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.scss"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateX(1)" })),
      transition("void => *", [
        animate(
          1000,
          keyframes([
            style({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
            style({ opacity: 1, transform: "translateX(15px)", offset: 0.3 }),
            style({ opacity: 1, transform: "translateX(0)", offset: 1.0 })
          ])
        )
      ]),
      transition("* => void", [
        animate(
          1000,
          keyframes([
            style({ opacity: 1, transform: "translateX(0)", offset: 0 }),
            style({ opacity: 1, transform: "translateX(-15px)", offset: 0.7 }),
            style({ opacity: 0, transform: "translateX(100%)", offset: 1.0 })
          ])
        )
      ])
    ])
  ]
})
export class WorksComponent implements OnInit {
  animationState = "in";
  constructor() {}

  ngOnInit() {}
}
