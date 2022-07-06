import React from 'react';
import {userApi} from "./store/slices/userSlice";
import UserCard from "./components/UserCard/UserCard";

const App = () => {
    const {data, isLoading} = userApi.useFetchAllUsersQuery('')

    if (isLoading) return <h1>Идет загрузка</h1>

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {data?.data && data.data.map(user => <UserCard {...user}/>)}
            {/*<Registration/>*/}
        </div>
    );
};

export default App;