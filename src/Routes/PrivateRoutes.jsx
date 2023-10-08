
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='mx-auto flex justify-center items-center mt-5'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.state} to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children:PropTypes.node
};

export default PrivateRoutes;