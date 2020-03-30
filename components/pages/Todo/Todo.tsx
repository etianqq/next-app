import React from 'react'
import { Checkbox, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons'
import { withRouter } from 'next/router'

interface IProps {
    onClick: () => void,
    completed: boolean,
    text: string,
    id: number,
    router: any
}

const Todo = (props: IProps) => {
    const { onClick, completed, text, id, router } = props;
    debugger
    function goToDetail() {
        router.push(`/list/${id}`)
    }

    return (
        <li style={{
            listStyle: 'none'
        }}>
            <div>
                <Checkbox
                    checked={completed}
                    onChange={onClick} >
                    <span
                        style={{
                            textDecoration: completed ? 'line-through' : 'none',
                        }}
                    > {text}</span>
                </Checkbox>
                <LinkOutlined onClick={goToDetail} />
            </div>
        </li>
    )
}

export default withRouter(Todo)