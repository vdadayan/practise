import React from 'react';
import {RegistrationStyled} from "./Registration.styled";
import TextField from "../../components/TextField/TextField";

const Registration = () => {

    const sendRegistration = (e: React.FormEvent) => {
        e.preventDefault()
    }
    return <RegistrationStyled>
        <p>Регистрация</p>

        <TextField placeholder={'Введите email'}/>
        <TextField placeholder={'Введите пароль'}/>
        <button type={'submit'} onClick={sendRegistration}>Отправить</button>
    </RegistrationStyled>;
};

export default Registration;