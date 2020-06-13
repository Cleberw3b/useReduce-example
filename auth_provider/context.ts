
import { createContext } from 'react'
import { IAuthCtx } from './interfaces'

const initialContext: IAuthCtx = {
    auth: {
        user: {
            _id: 0,
            username: 'default',
            email: 'default@auth.com'
        },
        isAuthenticated: false,
        token: ''
    },
    // tslint:disable-next-line:no-empty
    dispatch: () => { }
}

const AuthContext = createContext<IAuthCtx>(initialContext)

export default AuthContext
