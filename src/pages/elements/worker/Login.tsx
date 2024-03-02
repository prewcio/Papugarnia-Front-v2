import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react'
import TxtDiv from '../TextDiv';
import Loading from '../LoadingContent';
import { useNavigate } from 'react-router-dom';
import useAuthContext from './context/AuthContext';
import Req from '../Req';
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useAuthContext();

    if (!authContext) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }

    const { login, errors, user, getUser, loader, setLoader } = authContext;
    
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        let success = true;
        e.preventDefault();
        if(!(username!=='')){
            document.getElementsByName('login')[0].classList.add('p-invalid');
            success = false;
        }else {
            document.getElementsByName('login')[0].classList.remove('p-invalid');
        }if(!(password!=='')){
            document.getElementsByName('passwd')[0].classList.add('p-invalid');
            success = false;
        }else{
            document.getElementsByName('passwd')[0].classList.remove('p-invalid');
        }
        if(success){
            let email = username+"@test.test";
            login({email,password});
        }
    }
    useEffect(() => {
        if(!user) {
            getUser();
        }
        setLoader(false);
    }, []);
    useEffect(() => {
        if(user) {
            navigate('/worker/dashboard');
        }
    }, [user, navigate]);
    if (user) return null;
    return ( 
        <div className='content'>
            {loader && 
                <Loading />
            }
            <div className='auth'>
                <h1>LOGOWANIE</h1>
                <TxtDiv />
                <div className='logPanel'>
                    <form onSubmit={handleSubmit} id='loginform'>
                        <label htmlFor='login' className="form-label">Nazwa użytkownika<Req /></label><br />
                        <InputText required id="login" name="login" placeholder="Nazwa użytkownika" value={username} onChange={(e) => setUsername(e.target.value)} />
                        {errors.email !== "These credentials do not match our records." && errors.email &&
                            <span className="errorText"><br />To pole jest wymagane.</span>
                        }
                        <br /><br />
                
                        <label htmlFor='passwd' className="form-label">Hasło<Req /></label><br />
                        <InputText required id="passwd" name="passwd" type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && 
                            <span  className="errorText"><br />To pole jest wymagane.</span>
                        }
                        <br /><br />

                        <Button label='Zaloguj' type='submit' aria-label='Zaloguj' />
                    </form>
                    <div id="login-status">
                        {errors.email === "These credentials do not match our records." &&
                            <span className="errorText">Błędny login lub hasło</span>
                        }
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Login;