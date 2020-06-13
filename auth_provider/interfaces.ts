export interface UserProfile {
    _id: number
    username: string
    picture_url?: string
    email: string
    city?: string
}

export interface IAuth {
    user: UserProfile
    isAuthenticated: boolean
    token: string
};

export enum IAuthActionType {
    Login = 'login',
    Logout = 'logout',
    Start = 'start',
    Complete = 'complete'
}

export interface IUserCredencial {
    username: string
    password: string
}

export interface IAuthActions {
    type: IAuthActionType
    payload?: IUserCredencial
}

export interface IAuthCtx {
    auth: IAuth
    dispatch: React.Dispatch<IAuthActions>
}
