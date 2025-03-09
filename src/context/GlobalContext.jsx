import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ( { children } ) => {

const apikey = import.meta.env.VITE_API_KEY
const endpoint = import.meta.env.VITE_ENDPOINT

//data
const[ query, setQuery ] = useState('')
const[ movies, setMovies] = useState([])
const[ tv, setTv ] = useState([])


// HandleSubmit è una funzione che viene chiamata quando il modulo viene inviato
const HandleSubmit = (e) => {
    e.preventDefault()
    // console.log(query)

    axios.get ( `${endpoint}movie?api_key=${apikey}&query=${query}` )
    .then ( res => setMovies(res.data.results) )
    .catch( err => console.log(err))

    axios.get ( `${endpoint}tv?api_key=${apikey}&query=${query}` )
    .then ( res => setTv(res.data.results) )
    .catch( err => console.log(err))
}

useEffect( () => {
    console.log( "dati film"+ movies)
    console.log( "dati serie tv"+ tv)
    console.log("API Key:", apikey);
    console.log("Endpoint:", endpoint);
}, [movies, tv])

 //https://api.themoviedb.org/3/search/movie?api_key=727502de502820598f3427bfd1e07eec&query=ritorno+al+futuro 
 

 

    const value = {
        query,
        HandleSubmit,
        setQuery,
        movies,
        tv
    }

    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

const useGlobalContext = () => useContext(GlobalContext)

export{
    GlobalProvider,
    useGlobalContext
}
