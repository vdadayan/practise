import React, {useState} from "react";
import {apiRequest} from "../../api/apiConfig";

export const useRegistration = () => {
    const [email, setEmail] = useState({
        name: 'email',
        value: '',
        placeholder: 'Введите email'
    })
    const [password, setPassword] = useState({
        name: 'password',
        value: '',
        placeholder: 'Введите пароль'
    })
    const setEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let {value: valueInput} = e.target
        setEmail({...email, value: valueInput})
    }
    const setPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let {value: valueInput} = e.target
        setPassword({...password, value: valueInput})
    }
    const sendRegistration = async (e: React.FormEvent) => {
        e.preventDefault()
        await apiRequest.register({email: email.value, password: password.value})
    }
    return {email, password, setEmailValue, setPasswordValue, sendRegistration}
}