import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

interface tasksUser {
  nameUser: string,
  tasks: task[]
};

interface task {
  name: string,
  state: string
}

const ELEMENT_DATA : task[] = [
  {
    name: "Task 1",
    state: "Done"
  },
  {
    name: "Task 2",
    state: "In progress"
  },
  {
    name: "Task 3",
    state: "Pending"
  },
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'prueba-tecnica';

  displayedColumns: string[] = ['name-task', 'state-task'];

  taskForUser = ELEMENT_DATA; 
};
