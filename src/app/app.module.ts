import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { MatModule } from "../../mat.module";

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { WorksComponent } from "./works/works.component";
import { SkillsComponent } from "./skills/skills.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

const appRoutes: Routes = [
  { path: "", component: MainContentComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "works", component: WorksComponent },
  { path: "skills", component: SkillsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToolbarComponent,
    MainContentComponent,
    ContactComponent,
    AboutComponent,
    WorksComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
