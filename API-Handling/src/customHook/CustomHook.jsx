import axios from 'axios'
import  { useEffect, useState } from 'react'

const CustomHook = (UrlPath) => {
    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

        
  useEffect(() => {
    (async() => {
       try {
        setLoading(true)
        setError(false)
         const response = await axios.get(UrlPath)
         console.log(response.data);
         setProduct(response.data)
         setLoading(false)
       // eslint-disable-next-line no-empty
       } catch (error) {
        setError(true)
        setLoading(false)

       }
    })
    ()
  }, [])
  return (
   [product,error,loading]
  )
}

export default CustomHook
