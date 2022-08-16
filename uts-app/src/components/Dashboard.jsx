import React from "react";
import Login from "./SignUp";
import {useNavigate} from 'react-router-dom';



class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    Logoff(){
        localStorage.removeItem('user');
        localStorage.removeItem('pass');
        localStorage.removeItem('sesion');
        window.location.href = "/login";

    }
     
    

    render(){
        var usuario=localStorage.getItem('sesion');
        var password=localStorage.getItem('password');
        return(
            
            <form className="auth-inner">
                <h1>Proyecto<span className='primary'>UTS</span></h1>
                    <br />
                    <br />
                    <h3 className="text-center">DASH <span className='primary'>BOARD</span></h3>
                    <br />
                    <div className="form-group">
                        <h3>Usuario:</h3><p>{usuario} </p>
                    </div>
                    <br />
                    <div className="form-group">
                        <h3>Password:</h3><p>{password} </p>
                        
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.Logoff}>LOGOUT</button>
                </form>
        );
    }
}

export default Dashboard;