import React from 'react'

interface IProps {
    onClick: () => void,
    completed: boolean,
    text: string
}

const Todo = (props: IProps) => {
    const { onClick, completed, text } = props;
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    )
}

export default Todo