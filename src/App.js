import React, { useState } from 'react'
import Timer from './components/Timer'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  const [countdown, setCountdown] = useState(10000)
  const [notifPerm, setPerm] = useState(Notification.permission)

  if (notifPerm !== 'granted') {
    Notification.requestPermission().then(result => {
      setPerm(result)
    })
  }

  if (!countdown) {
    const notif = new Notification(
      'Refresh your mind! Stand up, stretch, drink some water. You deserve it!'
    )
  }

  return (
    <div id='app'>
      <Container>
        {notifPerm === 'granted' ? (
          <Timer countdown={countdown} setCountdown={setCountdown} />
        ) : (
          <h2>This page requires Notification permissions to run</h2>
        )}
      </Container>
    </div>
  )
}

export default App
