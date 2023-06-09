import { ReactNode, createContext, useContext, useState } from "react";

//Define type for context value
interface AuthContextType {
    isLoggedIn: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}

//Create AuthContext and provide type definition
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//Custom hook to consume AuthContext
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

//AuthProvider component that manages the login status and provides the context value
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
