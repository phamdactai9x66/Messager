import React from 'react';
import requireAuth, { useAuth } from '../auth/requireAuth'
import { Navigate, useLocation } from 'react-router-dom'

interface ProtectRoutes<T> {

}

const ProtectRoutes: React.FC<ProtectRoutes<any>> = ({ ...props }) => {
    const { checkLogin, Logout, Login } = useAuth();
    const location = useLocation();
    if (!checkLogin) {
        return <Navigate to={'/Login'} state={{ path: location.pathname }} />
    }

    return <>{props.children}</>;
};

export default ProtectRoutes;
