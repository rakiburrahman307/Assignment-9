import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Provider";


const Profile = () => {

    const { user } = useContext(AuthContext);
    console.log(user.photoURL)
    return (
        <div className="container mx-auto p-8 w-1/2">
            <div className="bg-blue-200 p-6 rounded-lg shadow-md mx-auto ">
                <div className="avatar w-24 mx-auto flex flex-col items-center text-center">
                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-5">
                        <img
                            className="mx-auto rounded-full"
                            src={user.photoURL ?? "https://i.ibb.co/Qvvqdt9/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
                            alt="User Avatar"
                        />
                    </div>
                </div>

                <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Name: {user.displayName}</h1>
                <p className="text-gray-600 mb-2">Email: {user.email}</p>
                <p className="text-gray-700 mb-4">Last Sign In Time: {user.metadata.lastSignInTime}</p>
                </div>

            </div>
        </div>
    );
};

export default Profile;