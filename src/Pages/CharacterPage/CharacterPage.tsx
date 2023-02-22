import style from './CharacterPage.module.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const CharacterPage = () => {

    const {id} = useParams()

    const getCharacter = () => {
        return axios
            .get("https://rickandmortyapi.com/api/character/" + id)
            .then(res => {
                console.log(res.data)
                return res.data
        })
    }

    const character = useQuery({
        queryKey: ["character", id],
        queryFn: getCharacter,
    })

    if (character.status === "loading") return <h1>Loading...</h1>
    if (character.status === "error") return <h1>{JSON.stringify(character.error)}</h1>

    return (
        <div 
            className={ style.characterContainer }
            >
                <h1>{character.data.name}</h1>
            <img src = {character.data.image}></img>
        </div>
    )
}

export default CharacterPage