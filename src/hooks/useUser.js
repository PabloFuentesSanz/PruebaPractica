import  UserContextProvider from '../context/UserContext'
import { useCallback, useContext} from 'react'

export default function useUser() {
    const {user, setUser} = useContext(UserContextProvider)
    
    //Persistence of the user status in session storage 
    const login = useCallback((user) => {
        window.sessionStorage.setItem('user', user)
        setUser(user)
    }, [setUser])

    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('user')
        setUser(null)
    }, [setUser])

    return{
        isLogged : Boolean(user),
        login,
        logout
    }
}
