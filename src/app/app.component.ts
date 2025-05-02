import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

interface Task {
  name: string;
  state: string;
}

const TASK_DATA: Task[] = [
  { name: "Task 1", state: "Done" },
  { name: "Task 2", state: "In progress" },
  { name: "Task 3", state: "Pending" },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-tecnica';

  displayedColumns: string[] = ['name', 'state'];
  dataSource = TASK_DATA;
}
