import { UserProfile, IAuth, IAuthActions, IAuthActionType, IUserCredencial } from "./interfaces"

const adminAuth: IAuth = {
    user: {
        _id: 999,
        username: 'admin',
        city: 'São Paulo',
        email: 'nossovoto@nossovoto.com.br',
        picture_url: ''
    },
    isAuthenticated: true,
    token: ''
}

const defaultUser: UserProfile = {
    _id: 0,
    username: 'default',
    email: 'default@auth.com'
}

export const authInitialState: IAuth = {
    user: defaultUser,
    isAuthenticated: false,
    token: ''
}

// TODO autenticate token
export const getUserFromToken = (token: string): IAuth => {
    const authCredential = adminAuth
    authCredential.token = token
    authCredential.isAuthenticated = true
    // TODO get user info

    return authCredential
}


// TODO autenticate username and password
export const getUserFromCredential = (username: string, password: string): IAuth => {
    if (username && password)
    {
        // TODO Retrive user from autorization server
        const authCredential: IAuth = adminAuth
        // TODO setAuthToken(authCredential.token)
        return authCredential
    }
    return authInitialState
}

const signIn = ({ username, password }: IUserCredencial): IAuth => {
    // tslint:disable-next-line:no-console
    console.info(Date.now() + " Signing in...")
    return getUserFromCredential(username, password)
}

const signOut = (): any => {
    // tslint:disable-next-line:no-console
    console.info(Date.now() + " Signing out...")
    // TODO Revoke token on autorization server
    // TODO removeAuthToken()
    window.location.replace("/login")
    return { user: defaultUser }
}

export const authReducer: React.Reducer<IAuth, IAuthActions> = (state, action) => {
    switch (action.type)
    {
        case IAuthActionType.Login:
            return signIn(action.payload ? action.payload : { username: '', password: '' })
        case IAuthActionType.Logout:
            return signOut()
        case IAuthActionType.Start:
            return {
                // loading: true
            }
        case IAuthActionType.Complete:
            return {
                // loading: false
            }
        default:
            return state
        // throw new Error();
    }
}
