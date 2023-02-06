import axios from 'axios'
import CharacterCard from '../../Components/CharacterCard/CharacterCard'
import style from './Characters.module.scss'
import { useQuery } from '@tanstack/react-query'

type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    image: string,
}


const Characters = () => {

    const getCharacters = () => {
        return axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => {
                console.log(res.data)
                return res.data.results
        })
    }

    const characterList = useQuery({
        queryKey: ["characters"],
        queryFn: getCharacters,
    })

    if (characterList.status === "loading") return <h1>Loading...</h1>
    if (characterList.status === "error") return <h1>{JSON.stringify(characterList.error)}</h1>

    return (
        <div className={ style.cardWrapper }>
                {characterList.data.map((char: Character) => (
                    <CharacterCard
                        id = { char.id }
                        key = { char.id }
                        name = { char.name }
                        status = { char.status }
                        image = { char.image }
                        onClick = {() => {
                            console.log(char.id)
                        } }
                    />
                ))}
        </div>
    )

}


export default Characters