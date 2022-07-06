import React, {FC} from 'react';
import {UserCardImgStyled, UserCardStyled} from "./UserCard.styled";
import {IUser} from "../../interfaces/IUser";


const UserCard: FC<IUser> = (user) => {
    return <UserCardStyled>
        <UserCardImgStyled src={user.avatar}>
        </UserCardImgStyled>
        <p>{user.first_name + ' ' + user.last_name}</p>
        <p>{user.email}</p>
    </UserCardStyled>
};

export default UserCard;