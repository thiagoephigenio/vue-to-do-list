import ToDoList from "./components/ToDoList";
import AddTask from "./components/AddTask";

export const routes = [
  {
    path: "/home",
    children: [
      {
        path: 'add-task',
        name: 'add-task',
        component: AddTask,
        props: true
      }
    ],
    component: ToDoList,
  },
  {
    path: '',
    redirect: '/home'
  }
];
