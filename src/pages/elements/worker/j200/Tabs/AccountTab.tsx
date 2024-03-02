import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'

import useAuthContext from '../../context/AuthContext';
import Req from '../../../Req';

function EditAcc() {
    const [aktualneHaslo, setAktualneHaslo] = useState("");
    const [noweHaslo, setNoweHaslo] = useState("");
    const [noweHasloPotw, setNoweHasloPotw] = useState("");

    type LocalAuthContextType = {
        changePassword: Function;
        errors: ErrorType;
        // include other properties as needed
    };
    
    const authContext: LocalAuthContextType | undefined = useAuthContext();

    if (!authContext) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }

    

    type ErrorType = {
        old_password?: string;
        new_password?: string;
        passwordChange?: string;
      };
      
    const { changePassword, errors }: { changePassword: Function; errors: ErrorType } = authContext;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        changePassword({
            old_password: aktualneHaslo,
            new_password: noweHaslo,
            new_password_confirmation: noweHasloPotw
        })
       
    }
    return (
        <form className='accountContainer' onSubmit={handleSubmit}>
            <h3>Aktualne hasło <Req /></h3><InputText type='password' value={aktualneHaslo} onChange={(e) => setAktualneHaslo(e.target.value)} required/>
            {errors.old_password &&
                <span className="errorText"><br />{errors.old_password}</span>
            }
            <h3>Nowe hasło <Req /></h3><InputText type='password' value={noweHaslo} onChange={(e) => setNoweHaslo(e.target.value)} required/>
            {errors.new_password && errors.new_password === "The new password must be at least 8 characters." &&
                <span className="errorText"><br />Hasło musi mieć conajmniej 8 znaków</span>
            }
            {errors.new_password && errors.new_password === "The new password confirmation does not match." &&
                <span className="errorText"><br />Nowe hasła nie pasują do siebie.</span>
            }
            {errors.new_password && errors.new_password === "Nowe hasło nie może być takie samo." &&
                <span className="errorText"><br />Nowe hasło nie może być takie samo.</span>
            }
            <h3>Potwierdź nowe hasło <Req /></h3><InputText type='password' value={noweHasloPotw} onChange={(e) => setNoweHasloPotw(e.target.value)} required/>
            <Button className="p-button-success panelSubmitButton" type='submit'>Zmień hasło</Button>
            {errors.passwordChange &&
                <span className="successText"><br />{errors.passwordChange}</span>
            }
        </form>
     );
}

export default EditAcc;