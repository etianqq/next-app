import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../../models/todo'
import { Button, Input, Row, Col } from 'antd'

const AddTodo = ({ dispatch }) => {
    const [value, setValue] = useState('')

    function add() {
        if (!value.trim()) {
            return
        }
        dispatch(addTodo(value))
        setValue('')
    }

    return (
        <Row style={{margin: '20px 0'}}>
            <Col span={12}>
                <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </Col>
            <Col span={12}>
                <Button onClick={add} type='primary'>Add Todo</Button>
            </Col>
        </Row>
    )
}

export default connect()(AddTodo)