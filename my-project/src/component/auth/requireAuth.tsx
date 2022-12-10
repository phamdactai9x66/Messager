import React from 'react';


const AuthProvider = React.createContext<any>(null);

interface RequireAuth<T> {

}

/**
 * 
 * @param param0 test1
 * @returns 
 */

const RequireAuth: React.FC<RequireAuth<any>> = ({ ...props }) => {
    const [checkLogin, setcheckLogin] = React.useState(false);
    const Login = () => setcheckLogin(true);
    const Logout = () => setcheckLogin(false);
    return <AuthProvider.Provider value={{ checkLogin, Login, Logout }}>
        {props.children}
    </AuthProvider.Provider>;
};



export const useAuth = () => {
    return React.useContext(AuthProvider);
};

export default RequireAuth;
