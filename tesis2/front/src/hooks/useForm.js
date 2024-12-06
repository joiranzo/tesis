import { useState } from "react";

export const useForm = (initialform={} ) => {
    
    const [formState, setformState]=useState(initialform)
    
      
    
      const onInputChange=({target})=>{
            
        const {name, value}=target
    
        setformState({...formState, [name]:value   })
      }
    
    return ({
    ...formState, onInputChange
  }

  )
}
