import React, { useEffect } from 'react'

const Refresher = ({ refresh, setRefresh, setCountdown, baseCd }) => {
  const ss = Math.floor((refresh / 1000) % 60).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })
  const mm = Math.floor((refresh / 1000 / 60) % 60).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })
  const hh = Math.floor((refresh / 1000 / 3600) % 24).toLocaleString(
    undefined,
    {
      minimumIntegerDigits: 2,
    }
  )

  useEffect(() => {
    if (refresh) {
      const interval = setInterval(() => setRefresh(refresh - 1000), 1000)
      return () => clearInterval(interval)
    }
  })

  useEffect(() => {
    if (!refresh) {
      setCountdown(baseCd)
    }
  }, [refresh])

  if (refresh > 0) {
    return (
      <div id='refresher'>
        <p>Refreshing...</p>
        {hh}:{mm}:{ss}
      </div>
    )
  } else {
    return null
  }
}
export default Refresher
