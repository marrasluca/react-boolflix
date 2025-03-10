import { Card } from "./Card"


export function Lista({type, items}){
    return(
        <section className="results-section">
            <p>
                Risulati lista : {items.length}
            </p>

            <ul className="results-flex">
                {
                items && items.length > 0 ? (
                        items.map( item => <Card key={item.id} data={item} type={type} />)
                ) : (
                    <p>Nessun risultato disponibile</p>
                )
                }
            </ul>
        </section>
    )
}