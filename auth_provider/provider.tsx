import UserAuthContext from "./context"
import { useReducer } from 'react'
import { authReducer, authInitialState } from './reducer'

interface IProps {
    children: JSX.Element | null
}

const UserAuthProvider: React.FC<IProps> = ({ children }) => {

    const [auth, dispatch] = useReducer(authReducer, authInitialState)

    return (
        <UserAuthContext.Provider value={{ auth, dispatch }}>
            {children}
        </UserAuthContext.Provider >
    )
}

export default UserAuthProvider
