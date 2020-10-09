import React, { useState, useEffect } from 'react'
import Timer from './components/Timer'
import TimerForm from './components/TimerForm'
import Refresher from './components/Refresher'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  const [baseCd, setBaseCd] = useState(15000)
  const [baseRf, setBaseRf] = useState(15000)
  const [countdown, setCountdown] = useState(baseCd)
  const [refresh, setRefresh] = useState(0)
  const [notifPerm, setPerm] = useState(Notification.permission)

  useEffect(() => {
    setCountdown(baseCd)
  }, [baseCd])

  if (notifPerm !== 'granted') {
    Notification.requestPermission().then(result => {
      setPerm(result)
    })
    return (
      <div id='app'>
        <Container>
          <h2>This app requires Notification permissions to run.</h2>
        </Container>
      </div>
    )
  } else {
    return (
      <div id='app'>
        <Container>
          <Timer
            countdown={countdown}
            setCountdown={setCountdown}
            baseCd={baseCd}
            baseRf={baseRf}
            setRefresh={setRefresh}
          />
          <TimerForm
            baseCd={baseCd}
            baseRf={baseRf}
            setBaseCd={setBaseCd}
            setBaseRf={setBaseRf}
          />
          <Refresher
            refresh={refresh}
            setRefresh={setRefresh}
            setCountdown={setCountdown}
            baseCd={baseCd}
          />
        </Container>
      </div>
    )
  }
}

export default App
