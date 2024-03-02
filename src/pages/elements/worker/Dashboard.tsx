import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MenuJ200 from './Menu';
import Loading from '../LoadingContent';
import useAuthContext from './context/AuthContext';
function WorkDashboard() {
    const [role, setRole] = useState("admin");
    const [place, setPlace] = useState("j200");

    const navigate = useNavigate();
    const location = useLocation();

    const authContext = useAuthContext();

    if (!authContext) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }

    const { login, errors, user, getUser, loader, setLoader } = authContext;

    const checkRole = ((req: any) => {
        return role === req;
    })

    useEffect(() => {
        if(user) {
            setLoader(false);
        } else {
            navigate('/worker/login');
        }
    }, [])


    return (
        <div className='content'>
            {loader && 
                <Loading />
            }
            <MenuJ200 rola={role} /> 

            
        </div>
     );
}

export default WorkDashboard;