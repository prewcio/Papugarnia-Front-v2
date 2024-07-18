import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../../functionsModules/axios";

/**
 * @typedef {Object} ErrorType
 * @property {string[]} [email]
 * @property {string[]} [password]
 */

/**
 * @typedef {Object} LocalAuthContextType
 * @property {any} user
 * @property {ErrorType} errors
 * @property {() => Promise<void>} getUser
 * @property {(data: any) => Promise<void>} login
 * @property {() => Promise<void>} logout
 * @property {(data: any) => Promise<void>} register
 * @property {() => Promise<void>} csrf
 * @property {boolean} loader
 * @property {(value: boolean) => void} setLoader
 * @property {string} role
 * @property {(data: any) => Promise<void>} changePassword
 */

/**
 * @type {React.Context<User>}
 */

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const [role, setRole] = useState("worker");
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
      } catch(e){
        if(e.response.status === 401){
            navigate('/worker/login');
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
            await axios.post("/login", data, { headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }});
            await getUser();
            console.clear();
            setLoader(false);
            navigate("/worker/dashboard");
            window.location.reload(false);
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
                console.clear();
                setLoader(false);
            }
            else if(e.response.status === 419) {
              window.location.reload();
            }
        }
    };

    const changePassword = async ({ ...data}) => {
      setErrors([]);
      try {
            await axios.post("/api/changePassword", data, { headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }}).then((e) => {
              setErrors(e.data.errors);
            });
            
            console.clear();
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
                console.clear();
                setLoader(false);
            }
            else if(e.response.status === 419) {
              window.location.reload();
            }
        }
    }
    
    const register = async ({ ...data }) => {
        await csrf();
        setErrors([]);
        try {
          await axios.post("/register", data, { headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }});
          await getUser();
          navigate("/");
          window.location.reload(false);
        } catch (e) {
          if (e.response.status === 422) {
            setErrors(e.response.data.errors);
          }
          else if(e.response.status === 419) {
            window.location.reload();
          }
        }
      };
    
    const logout = () => {
        axios.post("/logout").then(() => {
            setUser(null);
            console.clear();
            navigate('/worker/login');
            window.location.reload(false);
        });
    };

    return <AuthContext.Provider value={{ user, errors, getUser, login, logout, register, csrf, loader, setLoader, role, changePassword}}>
        {children}
    </AuthContext.Provider>
}
export default function useAuthContext() {
    return useContext(AuthContext);
}
