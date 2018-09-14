import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,} from '@angular/forms' 


import { AppComponent } from './app.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { PolicyComponent } from './policy/policy.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { MentorComponent } from './mentor/mentor.component';
import { Mentorpage1Component } from './mentorpage1/mentorpage1.component';
import { Mentorpage2Component } from './mentorpage2/mentorpage2.component';
import { MenteeComponent } from './mentee/mentee.component';
import { MenteeinfoComponent } from './mentee-info/mentee-info.component';


const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'mentorship',component: MentorshipComponent},
  { path: 'mentor',component: MentorComponent},
  { path: 'mentorpage1',component: Mentorpage1Component},
  { path: 'mentorpage2',component: Mentorpage2Component},
  { path: 'mentee',component: MenteeComponent},
  { path: 'mentee-info',component: MenteeinfoComponent},
  { path: '**', component: ErrorComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    FootBarComponent,
    HeadBarComponent,
    ProjectsComponent,
    HomeComponent,
    JobsComponent,
    ContactComponent,
    ErrorComponent,
    PolicyComponent,
    MentorshipComponent,
    MentorComponent,
    Mentorpage1Component,
    Mentorpage2Component,
    MenteeComponent,
    MenteeinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
