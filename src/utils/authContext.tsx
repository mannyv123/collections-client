import { ReactNode, createContext, useContext, useState, useEffect } from "react";

//Define type for context value
interface AuthContextType {
    isLoggedIn: boolean;
    username: string | null;
    handleLogin: (username: string) => void;
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
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleLogin = (username: string) => {
        setIsLoggedIn(true);
        setUsername(username);
        localStorage.setItem("username", username);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername(null);
        localStorage.removeItem("username");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout, username }}>
            {children}
        </AuthContext.Provider>
    );
};
