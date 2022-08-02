import { Row, Tag, Checkbox, Col } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import todoSlice from '../../store/todo/todoSlice'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

export default function Todo({ todo }) {
  const [checked, setChecked] = useState(todo.completed)
  const dispatch = useDispatch()

  const toggleCheckbox = () => {
    setChecked((pre) => {
      dispatch(todoSlice.actions.updateCompleteTodo({ id: todo.id, completed: !pre }))

      return !pre
    })
  }

  const handleDeleteTodo = () => {
    dispatch(todoSlice.actions.deleteTodo(todo.id))
  }

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Col>
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {todo.name}
        </Checkbox>
      </Col>
      <Col>
        <Tag color={priorityColorMapping[todo.priority]} style={{ margin: 0 }}>
          {todo.priority}
        </Tag>
        <Tag color="red" style={{ margin: 5, cursor: 'pointer' }} onClick={handleDeleteTodo}>
          X
        </Tag>
      </Col>
    </Row>
  )
}
