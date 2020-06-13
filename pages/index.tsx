import { useContext } from 'react'
import AuthContext from '../auth_provider/context';
import { IAuthActionType } from '../auth_provider/interfaces';

const Index = () => {

	const { auth, dispatch } = useContext(AuthContext);

	return (
		<>
			{auth.isAuthenticated &&
				<>
					<div onClick={() => {
						dispatch({
							type: IAuthActionType.Logout
						})
					}}>
						CLICK HERE TO LOGOUT {auth.user.username}!!
					</div>
					<div onClick={() => console.log(auth)}>
						CLICK HERE TO PRINT AUTH CONTEXT
            		</div>
				</>
			}
		</>
	)
}

export default Index
