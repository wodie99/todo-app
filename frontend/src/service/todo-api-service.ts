import axios from 'axios'
import {Todo} from "../model/Todo";
import {TodoTTO} from "../model/TodoTTO";

export function getTodos() {
  return axios.get<Todo[]>("/api/todo")
      .then(response => response.data)
}

export const postTodo = (newDescription: string) => {
  const newTodo: TodoTTO = {
    description: newDescription,
    status: 'OPEN',
  }

  return axios.post('/api/todo', newTodo)
      .then(response => response.data)
      .then((todo:Todo) => todo)
}

export const putTodo = (todo: Todo) => {
  return axios.put(`/api/todo/${todo.id}`, todo).then(response => response.data)
}

export const deleteTodo = (id: string) => {
  return axios.delete(`/api/todo/${id}`)
}

export const getTodoBy = (id: string) => {
  return axios.get(`/api/todo/${id}`)
}
