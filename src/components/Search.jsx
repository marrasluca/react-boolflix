import  { useState, useEffect } from "react"



export function Search(){

    const[ query, setQuery ] = useState('')


    // HandleSubmit è una funzione che viene chiamata quando il modulo viene inviato
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
    }

    return(
        <form onSubmit={e => HandleSubmit(e)}>


            {/* gestore di eventi che viene attivato ogni volta che l'utente cambia il valore */}
            <input type="text" onChange={ e => console.log( e.target.value ) }/> 


            <button type="submit">Cerca</button>
        </form>
    )
}