import { createContext, useContext, useState } from 'react';
import axios from '../../../../functionsModules/axios';
import { useNavigate } from 'react-router-dom';
type ErrorType = {
    old_password?: string;
    new_password?: string;
    passwordChange?: string;
    email?: string;
    password?: string;
};
interface AuthContextType {
    user: any;
    errors: ErrorType;
    getUser: () => void;
    login: (data: any) => void;
    logout: () => void;
    register: (data: any) => void;
    csrf: () => void;
    loader: boolean;
    setLoader: (loader: boolean) => void;
    role: string;
    changePassword: (data: any) => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState<ErrorType>({});
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const csrf = () => axios.get("/sanctum/csrf-cookie");
    const getUser = async () => {
        setLoader(true);
        try {
            const { data } = await axios.get("/api/user");
            setUser(data);
            setRole(data.role);
            setLoader(false);
            console.clear();
        } catch(e: any){
        if(e?.response?.status === 401){
            navigate('/worker/login');
            setLoader(false);
            console.clear();
        }
      }
    };

    const login = async ({ ...data }) => {
       await csrf();
        setLoader(true);
        setErrors({});
        try {
            await axios.post("/login", data);
            await getUser();
            console.clear();
            setLoader(false);
            window.location.reload();
        } catch (e: any) {
            if (e?.response?.status === 422) {
                setErrors(e?.response?.data.errors);
                console.clear();
                setLoader(false);
            }
        }
    };

    const changePassword = async ({ ...data}) => {
        setErrors({});
        try {
            await axios.post("/api/changePassword", data).then((e) => {
                setErrors(e.data.errors);
            });
            console.clear();
        } catch (e: any) {
            if (e?.response?.status === 422) {
                setErrors(e.response.data.errors);
                console.clear();
                setLoader(false);
            }
        }
    }
      
    const register = async ({ ...data }) => {
        await csrf();
        setErrors({});
        try {
            await axios.post("/register", data)
            await getUser();
            navigate("/");
        } catch (e: any) {
            if (e?.response?.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    };

    const logout = () => {
        axios.post("/logout").then(() => {
            setUser(null);
            console.clear();
            window.location.reload();
        });
    };

    return <AuthContext.Provider value={{ user, errors, getUser, login, logout, register, csrf, loader, setLoader, role, changePassword}}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}