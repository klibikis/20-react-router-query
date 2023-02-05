import style from "./CharacterCard.module.scss"

type CharacterCardProps = {
    name: string,
    status: string,
    image: string
}


const CharacterCard = ({name, status, image}: CharacterCardProps) => {


    return(
        <div className={ style.card }>
            <img src= { image } className = {style.cardImage}/>
            <div>{ name }</div>
            

        </div>
        
    )
}


export default CharacterCard