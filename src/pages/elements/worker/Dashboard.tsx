import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuJ200 from './Menu';
import Loading from '../LoadingContent';
import useAuthContext from './context/AuthContext';
function WorkDashboard() {
    const [role, setRole] = useState("worker");

    const navigate = useNavigate();
    // const location = useLocation();

    const authContext = useAuthContext();

    if (!authContext) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }

    const { user, getUser, loader, setLoader } = authContext;

    // const checkRole = ((req: any) => {
    //     return role === req;
    // })

    useEffect(() => {
        getUser();
        if(user) {
            setRole(user.role)
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