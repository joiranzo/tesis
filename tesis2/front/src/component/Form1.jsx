import { useState } from 'react';
import { UserFetch } from '../hooks/Userfetch';
import PropTypes from 'prop-types';

export const Form1 = ({titulo, url}) => {

  const { data } = UserFetch(url,'GET')
  
  const [esNuevo,setEsNuevo]=useState({visible:false,
                                       valor:'' 
  })
 
  const nuevo=()=>{
    setEsNuevo({...esNuevo,visible:true})
  }

  const cancelar=()=>{
    setEsNuevo({...esNuevo,visible:false})
  }

  const cambio=({target})=>{
    setEsNuevo({...esNuevo,valor:target.value})
  }

  const guardar=async ()=>{
   
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id: esNuevo.valor })
        };
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log(data)
        location.reload()
        
       
   
   
    }
    
  
  return (
    <>
      <h1 className="text-center">{titulo}</h1>
      {!data ?<h2>No datos</h2>
      :
      <div>
        {data.map((user) => {
            return (
                <div key={user._id}>
                    <input className="text-capitalize" value={user._id}></input>
                    <button className="btn btn-primary" >Editar</button>
                    <button className="btn btn-danger" >Borrar</button>
                </div>
              );
            }
        )}
            {esNuevo.visible ?
                    <div >
                    <input className="text-capitalize" onChange={cambio} value={esNuevo.valor}></input>
                    <button className="btn btn-primary" onClick={guardar}>Guardar</button>
                    <button className="btn btn-danger" onClick={cancelar}>Cancelar</button>
                </div>
            :<></>    }
            <button onClick={nuevo}>Nuevo</button>  
    
     </div>}
    </>
  );
}

Form1.propTypes={
    titulo:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}