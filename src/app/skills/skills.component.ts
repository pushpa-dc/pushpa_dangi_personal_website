import { Component, OnInit } from "@angular/core";
import {
  trigger,
  style,
  state,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ opacity: 1, transform: "translateX(0)" })),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateX(-100%)"
        }),
        animate("0.2s ease-in")
      ]),
      transition("* => void", [
        animate(
          "0.2s 0.1s ease-out",
          style({
            opacity: 0,
            transform: "translateX(100%)"
          })
        )
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
