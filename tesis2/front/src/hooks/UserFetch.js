/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react"

export const UserFetch = (url,metodo='GET',datos) => {

const [state,setState]=useState({
        data:null,
        isloading:true,
        errors:null
    })

    const getFetch=async ()=>{
       
        if (!datos)
            datos=JSON.stringify({
        _id:datos})    
       
        try {
            switch (metodo) {
                case 'GET':{
                    const response=await fetch(url,{method:metodo})
                    const data=await response.json()        
                    setState({
                        data,
                        isloading:false,
                        errors:null
                    })}
                    break;
                case 'POST':{
                        console.log(datos)
                        const response=await fetch(url,{method:metodo})
                        const data=await response.json()        
                        setState({
                            data,
                            isloading:false,
                            errors:null
                        })}
                        break;
                    
                default:
                    break;
            }
            
            
        } catch (error) {
            setState({
                data:null,
                isloading:false,
                errors:error
            })
        }
    }

    useEffect( ()=>{
        if (!url) return
        getFetch()
    },[url])
  
    return (
        state
  )
}
