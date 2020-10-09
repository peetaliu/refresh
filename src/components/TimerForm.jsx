import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const TimerForm = ({ baseCd, baseRf, setBaseCd, setBaseRf }) => {
  const [cd, setCd] = useState(baseCd)
  const [rf, setRf] = useState(baseRf)

  const handleCdChange = tempCd => {
    setCd(tempCd * 60000)
  }

  const handleRfChange = tempRf => {
    setRf(tempRf * 1000)
  }

  const handleSet = () => {
    setBaseCd(cd)
    setBaseRf(rf)
  }
  return (
    <Form>
      <Form.Group controlId='cd'>
        <Form.Label>Countdown (in Minutes)</Form.Label>
        <Form.Control
          type='number'
          onChange={({ target }) => handleCdChange(target.value)}
        />
      </Form.Group>
      <Form.Group controlId='rf'>
        <Form.Label>Refresh (in Seconds)</Form.Label>
        <Form.Control
          type='number'
          onChange={({ target }) => handleRfChange(target.value)}
        />
      </Form.Group>
      <Button onClick={handleSet}>Set</Button>
    </Form>
  )
}
export default TimerForm
