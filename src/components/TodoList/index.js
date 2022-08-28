import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useState, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/todo/todoActions'
import Todo from '../Todo'
import { v4 as uuidv4 } from 'uuid'
import { getTodoListWithFilter } from '../../store/todo/totoSelectors'

const TodoList = function () {
  const [valueInput, setValueInput] = useState('Learn React')
  const [valueType, setValueType] = useState('High')
  const dispatch = useDispatch()
  const todoList = useSelector(getTodoListWithFilter)

  const handleChangeInput = (e) => {
    const value = e.target.value
    setValueInput(value)
  }

  const handleChangeType = (value) => {
    setValueType(value)
  }

  const handleAddTodo = () => {
    const product = {
      id: uuidv4(),
      name: valueInput,
      completed: false,
      priority: valueType,
    }
    dispatchAddTodo(product)
  }

  const dispatchAddTodo = useCallback((product) => dispatch(addTodo(product)), [dispatch])

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {!todoList.length && <div style={{ textAlign: 'center' }}>There are no todo</div>}
        {todoList.length > 0 && todoList.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={valueInput} onChange={handleChangeInput} />
          <Select defaultValue="Medium" value={valueType} onChange={handleChangeType}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}

export default memo(TodoList)
