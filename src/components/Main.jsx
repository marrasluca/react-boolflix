import { use } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import {Lista} from "./Lista"

export function Main(){

const { movies, tv} = useGlobalContext()

// const HandleStars = (vote) => {
//     return(
//         Math.ceil( vote / 2 )
//     )
// }

    return(
        <main>
            <h2>Films</h2>
            <Lista type="movies" items={movies}/>

            {/* <ul>
                {
                    movies.map( (elem) => {
                        return(
                            <li key={elem.id}>
                                {elem.title} -  {elem.original_language} - {elem.original_title} - { HandleStars(parseInt( elem.vote_average) )}
                            </li>
                        )
                    })
                }
            </ul> */}

            <h2>Serie tv</h2>
            <Lista  type="tv" items={tv}/>

            {/* <ul>
                {
                    tv.map( (elem) => {
                        return(
                            <li key={elem.id}>
                                {elem.name}
                            </li>
                        )
                    })
                }
            </ul> */}
        </main>
    )
}