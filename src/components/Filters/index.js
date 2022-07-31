import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFilterPriority, addFilterStatus, addSearchFilter } from '../../store/todo/todoActions'

const { Search } = Input

export default function Filters() {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriority, setFilterPriority] = useState([])

  useEffect(() => {
    dispatch(addSearchFilter(searchValue))
  }, [searchValue, dispatch])

  useEffect(() => {
    dispatch(addFilterStatus(filterStatus))
  }, [filterStatus, dispatch])

  useEffect(() => {
    dispatch(addFilterPriority(filterPriority))
  }, [filterPriority, dispatch])

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search placeholder="input search text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={(e) => setFilterPriority(e)}
        >
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
      </Col>
    </Row>
  )
}
