import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../../models/todo'
import { VisibilityFilters } from '../../../models/todo'
import Todo from './Todo'


interface IProps {
    todos: listIn.TodoItem[],
    toggleTodo: (id: number) => void
}

const TodoList = (props: IProps) => {
    const { todos, toggleTodo } = props;
    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            ))}
        </div>
    )
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
  
  const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  })
  
  const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoList)