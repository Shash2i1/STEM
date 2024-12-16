import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const Status = useSelector(state => state.auth.authStatus)

    useEffect(() => {
       
        if(authentication && Status !== authentication){
            navigate("/")
        } else if(!authentication && Status !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [Status, navigate, authentication])

  return loader ? <h1></h1> : <>{children}</>
}
