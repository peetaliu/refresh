import React, { useEffect } from 'react'

const Timer = ({ countdown, setCountdown, setRefresh, cd }) => {
  useEffect(() => {
    if (countdown) {
      const interval = setInterval(() => setCountdown(countdown - 1000), 1000)
      return () => clearInterval(interval)
    }
  })
  if (!countdown) {
    const notif = new Notification(
      `It's been ${cd / 60000} minutes. Take a quick break!`,
      { body: 'Stand up, stretch, grab a drink! You deserve it! <3' }
    )
    setRefresh(15000)
  }

  const ss = Math.floor((countdown / 1000) % 60).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })
  const mm = Math.floor((countdown / 1000 / 60) % 60).toLocaleString(
    undefined,
    {
      minimumIntegerDigits: 2,
    }
  )
  const hh = Math.floor((countdown / 1000 / 3600) % 24).toLocaleString(
    undefined,
    {
      minimumIntegerDigits: 2,
    }
  )

  return (
    <div>
      {hh}:{mm}:{ss}
    </div>
  )
}
export default Timer
