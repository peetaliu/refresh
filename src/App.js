import React, { useState, useEffect } from 'react'
import Timer from './components/Timer'
import TimerForm from './components/TimerForm'
import Refresher from './components/Refresher'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  const [baseCd, setBaseCd] = useState(15000)
  const [baseRf, setBaseRf] = useState()
  const [countdown, setCountdown] = useState(baseCd)
  const [refresh, setRefresh] = useState(0)
  const [notifPerm, setPerm] = useState(Notification.permission)

  // if (!countdown) {
  //   const interval = setInterval(() => setRefresh(refresh - 1000), 1000)
  //   return () => clearInterval(interval)
  // }

  if (notifPerm !== 'granted') {
    Notification.requestPermission().then(result => {
      setPerm(result)
    })
  }

  return (
    <div id='app'>
      <Container>
        {notifPerm === 'granted' ? (
          <Timer
            countdown={countdown}
            setCountdown={setCountdown}
            cd={baseCd}
            setRefresh={setRefresh}
          />
        ) : (
          <h2>This page requires Notification permissions to run</h2>
        )}
        {refresh ? (
          <Refresher
            refresh={refresh}
            setRefresh={setRefresh}
            countdown={countdown}
          />
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default App
