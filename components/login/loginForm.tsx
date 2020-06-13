import { useContext, BaseSyntheticEvent } from 'react'
import { useForm } from 'react-hook-form'
import { IAuthActionType, IUserCredencial } from 'auth_provider/interfaces'
import InputUserName from 'components/formComponent/inputUserName'
import InputPassword from 'components/formComponent/inputPassword'
import AuthContext from 'auth_provider/context'
import { encrypt } from 'utils/crypto-util'

const LoginForm = () => {

    const { register, errors, handleSubmit } = useForm()
    const { dispatch } = useContext(AuthContext)

    const submit = async ({ username, password }: any, e: BaseSyntheticEvent | undefined) => {
        try
        {
            if (typeof username === "string" && typeof password === "string")
            {
                const credential: IUserCredencial = {
                    username,
                    password
                }

                dispatch({
                    type: IAuthActionType.Login,
                    payload: credential
                })

                const encrypted = encrypt({ username, password })

                alert(username + '\n' + password + '\n' + encrypted.toString())

                window.location.replace("/")
            }
        } catch (error)
        {
            console.error(error.message)
            console.error(error)
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form"
                onSubmit={handleSubmit((data, e) => submit(data, e))}
                noValidate
            >
                <InputUserName register={register} errors={errors} />
                <InputPassword register={register} errors={errors} />
                <button type="submit" />
            </form>
        </div>
    )
}

export default LoginForm
