import { useEffect, useState } from 'react'


const useFetch = (url, options) => {

    const [loading,SetLoading]=useState(true)
    const [result,SetResult]=useState("")
    const [error,SetError]=useState("")

    const getData = async()=>{
        try{
            const result = await fetch(url, options)
            const data = await result.json();

            SetLoading(false)
            SetResult(data)
        }catch(error){

            SetError(error)
            SetLoading(false)
        }
    }

    useEffect(()=>{

        getData()

    }, [])


  return (
    {loading,result,error}
  )
}

export default useFetch