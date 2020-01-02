import { useState, useEffect } from 'react'
import axios, { CancelToken, isCancel } from 'utils/axios'

export default url => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const source = CancelToken.source()
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(url, { cancelToken: source.token })
        setData(data.map(v => ({ ...v, key: v.id })))
        setLoading(false)
      } catch (e) {
        if (isCancel(e)) {
          console.log('Request canceled', e.message)
        }
      }
    }
    fetchData()
    return () => {
      source.cancel('Operation canceled')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, loading]
}
