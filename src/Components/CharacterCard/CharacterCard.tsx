import style from "./CharacterCard.module.scss"
import { Link } from 'react-router-dom';

type CharacterCardProps = {
    id: number,
    name: string,
    status: string,
    image: string
    onClick?: () => void
}


const CharacterCard = ({name, status, image, onClick, id}: CharacterCardProps) => {


    return(
        <Link 
            onClick = { onClick }
            to = {`/characters/${id}`}
            className = { style.card }>
            <img src= { image } className = {style.cardImage}/>
            <div>{ name }</div>
            <div>{ status }</div>
        </Link>
        
    )
}


export default CharacterCard