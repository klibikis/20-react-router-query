import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const NotFound = () => {
    
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 1000)
    })

    return <h1>Page not found.</h1>

}

export default NotFound