import React, { useState } from 'react'
import Timer from './components/Timer'

const App = () => {
  const [countdown, setCountdown] = useState(500000)

  return (
    <div>
      <Timer countdown={countdown} setCountdown={setCountdown} />
    </div>
  )
}

export default App
