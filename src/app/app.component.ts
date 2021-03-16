import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  
  title = "Puspa Raj Dangi";
  update:boolean=false;
  constructor(updates:SwUpdate){
    updates.available.subscribe(event=>{
// this.update = true;
updates.activateUpdate().then(()=>document.location.reload());
    })
  }
  
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});


