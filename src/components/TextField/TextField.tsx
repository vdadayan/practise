import React, {FC} from 'react';
import {TextFieldInputStyled, TextFieldWrapperStyled} from "./TextField.styled";

const TextField: FC<any> = (props) => {
    return <TextFieldWrapperStyled {...props}>
        <TextFieldInputStyled {...props}>

        </TextFieldInputStyled>
    </TextFieldWrapperStyled>
};

export default TextField;