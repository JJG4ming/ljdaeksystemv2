import { useCookies } from "react-cookie";



const customHeader = {
    
    headers: {
        authorization: useCookies([cookies, setCookies].token)
    }
}

export default customHeader