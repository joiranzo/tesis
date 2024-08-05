

const buscarGremio= async() => {
    let buscarData=new FormData()
    
    try {
        const repuesta= await fetch("./consulta.php")

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
    })
}

showdata()