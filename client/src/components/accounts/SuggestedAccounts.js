import React, {useEffect,useState} from 'react'
import axios from 'axios'

const SuggestedAccounts = () => {
    const [suggestedAccounts,setSuggestedAccounts] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8000/api/users')
            .then((res)=>{
                console.log(res.data)
                setSuggestedAccounts(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
  return (
    <>
        {
            suggestedAccounts.map((account,index)=>(
                    index < 5?
                    <li key={index}><a href={`user/${account.username}`}>{account.username}</a></li>:null
            ))
        }
    </>
  )
}

export default SuggestedAccounts