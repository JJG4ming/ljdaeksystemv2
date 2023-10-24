import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoPage = ({loggedIn}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (loggedIn == false) {
            navigate("login")
        }
    }, [])

    return <h1>404</h1>;
};
    
export default NoPage;