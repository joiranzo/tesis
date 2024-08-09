

const buscarGremio= async() => {
    let buscarData=new FormData()
    
    try {
        const repuesta= await fetch("http://127.0.0.7:3000/consulta.php")

        return repuesta.json()
    } catch (error) {
        alert(`${'Errro'}${error.message}`)
        console.log(error)
    }
}

const showdata=() =>{
    buscarGremio()
    .then(jose=>{
        console.log(jose)
        if (typeof jose.data !== 'undefined' && !jose.data) {
            
        } else {
            for (const element of jose) {
                const row=document.createElement('div')

                row.innerHTML=`${jose.NomRepreGremial}`
            }
        }
    })
}

showdata()