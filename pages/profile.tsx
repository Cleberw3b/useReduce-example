import { useContext } from 'react'
import AuthContext from '../auth_provider/context'

const Profile = () => {
    const { auth } = useContext(AuthContext);

    return (
        <div>
            Is Authenticated? {auth.isAuthenticated}
            My Token = {auth.token}
            ID =  {auth.user._id}
            City = {auth.user.city}
            Email = {auth.user.email}
            PictureURL = {auth.user.picture_url}
            Username = {auth.user.username}
        </div>
    )
}

export default Profile
