import { NotfoundComponent } from './notfound/notfound.component';
import { TrackerComponent } from './tracker/tracker.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OfficepageComponent } from './officepage/officepage.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: MainpageComponent},
  { path: "office", component: OfficepageComponent},
  { path: "tracker", component: TrackerComponent},
  { path: "errorpath", component: NotfoundComponent},
  { path: "**", redirectTo: "errorpath", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
