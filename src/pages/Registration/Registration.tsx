import React from 'react';
import {RegistrationStyled} from "./Registration.styled";
import TextField from "../../components/TextField/TextField";
import {useRegistration} from "./useRegistration";

const Registration = () => {
    const {sendRegistration, setEmailValue, setPasswordValue, email, password} = useRegistration()
    return <RegistrationStyled>
        <p>Регистрация</p>

        <TextField {...email} onChange={setEmailValue}/>
        <TextField {...password} onChange={setPasswordValue}/>
        <button type={'submit'} onClick={sendRegistration}>Отправить</button>
    </RegistrationStyled>;
};

export default Registration;