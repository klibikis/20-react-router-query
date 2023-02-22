import style from './About.module.scss'

const About = () => {

    return(
        <div>
            <h1 className = { style.title }>About</h1>
            <p className= { style.text }> The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.</p>  
            <img src = "https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" width = "100%;"></img>
        </div>
    )
}

export default About