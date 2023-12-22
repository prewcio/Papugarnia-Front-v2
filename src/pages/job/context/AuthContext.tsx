import { createContext, useContext, useState } from 'react';
import axios from '../../../functionsModules/axios';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext({});
export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
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
        if(e.response.status === 401){
            navigate('/job/login');
            setLoader(false);
            console.clear();
        }
      }
    };

    const login = async ({ ...data }) => {
        await csrf();
        setLoader(true);
        setErrors([]);
        try {
            await axios.post("/login", data);
            await getUser();
            console.clear();
            setLoader(false);
            navigate("/job/dashboard");
        } catch (e: any) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
                console.clear();
                setLoader(false);
            }
        }
    };

    const changePassword = async ({ ...data}) => {
        setErrors([]);
        try {
            await axios.post("/api/changePassword", data).then((e) => {
                setErrors(e.data.errors);
            });
            console.clear();
        } catch (e: any) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
                console.clear();
                setLoader(false);
            }
        }
    }
      
    const register = async ({ ...data }) => {
        await csrf();
        setErrors([]);
        try {
            await axios.post("/register", data)
            await getUser();
            navigate("/");
        } catch (e: any) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    };

    const logout = () => {
        axios.post("/logout").then(() => {
            setUser(null);
            console.clear();
            navigate('/job/dashboard');
        });
    };

    return <AuthContext.Provider value={{ user, errors, getUser, login, logout, register, csrf, loader, setLoader, role, changePassword}}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}