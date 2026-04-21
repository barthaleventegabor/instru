import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { NoteComponent } from './note/note.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "instrument", component: InstrumentComponent},
    {path: "note", component: NoteComponent},

];
