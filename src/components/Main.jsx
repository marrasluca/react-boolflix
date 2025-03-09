import { use } from "react"
import { useGlobalContext } from "../context/GlobalContext"

export function Main(){

const { movies, tv} = useGlobalContext()

const HandleStars = (vote) => {
    return(
        Math.ceil( vote / 2 )
    )
}

    return(
        <main>
            <h2>Films</h2>

            <ul>
                {
                    movies.map( (elem) => {
                        return(
                            <li key={elem.id}>
                                {elem.title} -  {elem.original_language} - {elem.original_title} - { HandleStars(parseInt( elem.vote_avarage) )}
                            </li>
                        )
                    })
                }
            </ul>

            <h2>Serie tv</h2>

            <ul>
                {
                    tv.map( (elem) => {
                        return(
                            <li key={elem.id}>
                                {elem.name}
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}