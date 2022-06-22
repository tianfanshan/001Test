import { useReducer, createContext } from "react";
import UserReducer from './UserReducer'
import axios from 'axios'

const token = JSON.parse(localStorage.getItem('token'))

const initialvalues = {
    token: token ? token : null,
    user: null,
    message:''
}

const API_URL ='http://localhost:8080'

export const UserContext = createContext(initialvalues)

export const UserProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(UserReducer,initialvalues)
    
    const login = async(user) => {
        const res = await axios.post(API_URL + '/users/login',user)

        dispatch({
        type: 'LOGIN',
        payload: res.data
        })

        if(res.data){
            localStorage.setItem('token',JSON.stringify(res.data.token))
        }
    }

    const userInfo = async () => {

        const token = JSON.parse(localStorage.getItem('token'))

        const res = await axios.get(API_URL + '/users/myInfo',{
            headers:{
                authorization:token
            }
        })

        dispatch({
            type: 'GETINFO',
            payload: res.data
        })

        return res
    }


    const logout = async ()=>{

        const token = JSON.parse(localStorage.getItem('token'))

        const res = await axios.delete(API_URL + '/users/logout',
        {
            headers:{
                authorization:token
            }
        })

        dispatch({
            type:'LOGOUT',
            payload:res.data,
            
        })
        if(res.data){
            localStorage.removeItem('token')
        }
    }


    return(
        <UserContext.Provider
        value={{
            token:state.token,
            user:state.user,
            message:state.message,
            login,
            logout,
            userInfo
        }}
        >
            {children}
        </UserContext.Provider>
    )
}