import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {
  transition,
  group,
  animate,
  style,
  trigger,
  state
} from "@angular/animations";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  animations: [
    trigger("flyInOut", [
      state(
        "in",
        style({ width: 348, transform: "translateX(0)", opacity: 1 })
      ),
      transition("void => *", [
        style({ width: 348, transform: "translateX(50px)", opacity: 0 }),
        group([
          animate(
            "0.3s 0.1s ease",
            style({
              transform: "translateX(0)",
              width: 348
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
              width: 348
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
export class ContactComponent implements OnInit {
  // textFromControl=new FormControl('',[
  //   Validators.
  // ])

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  constructor() {}

  ngOnInit() {}
}
