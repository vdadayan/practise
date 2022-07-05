import React, {useEffect} from 'react';
import {apiRequest} from "./api/apiConfig";
import Registration from "./pages/Registration/Registration";

const App = () => {
    useEffect(()=> {
        apiRequest.getListUsers()
    }, [])
    return (
        <div>
           <Registration/>
        </div>
    );
};

export default App;