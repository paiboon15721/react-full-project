import { useState, useEffect } from 'react'
import axios from 'utils/axios'

export default url => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const { data } = await axios.get(url)
    setData(data.map(v => ({ ...v, key: v.id })))
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, loading]
}
