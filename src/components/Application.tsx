import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './Signup';
import SignIn from './Signin';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/Signup' element={<SignUp/>}/>
            <Route path='/Signin' element={<SignIn/>}/>
        </Routes>

        </BrowserRouter>
    )
}

export default Application;