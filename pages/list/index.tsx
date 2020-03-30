import React from 'react'
import AddTodo from '../../components/pages/Todo/AddTodo'
import TodoList from '../../components/pages/Todo/TodoList'
import FilterLink from '../../components/pages/Todo/FilterLink'
import { VisibilityFilters } from '../../models/todo'

const List = () => {

    return (
        <div>
            <div>
                <span>Show: </span>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            </div>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default List