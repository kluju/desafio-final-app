import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { logoutActionCreator } from '../../store/modules/auth/login.actions';
import { FaPowerOff,FaRegUser,FaHome,FaList } from 'react-icons/fa';

import {
  NavbarBrand,
  NavLink,} from 'reactstrap'; 

const Header = (props) => {
    
    const dispatch = useDispatch();
    const [isOpen, setIsOpen ] = useState(false);
    const [path, setPath ] = useState(props.location.pathname.toString() === "/login".toString());
    useEffect(() => {
    }, [path]);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const isLogin = () => {
      const jwt = localStorage.getItem('jwt'); 
      const result = !!jwt;
      return result;
    }
    const logout = () => {
        dispatch(logoutActionCreator());
        props.history.push('/login')
        
    }
    const path2 = () => {
      //alert("FUN "+ props.location.pathname.toString() === "/login".toString()); 
      return props.location.pathname.toString() === "/login".toString(); 
    }
    return  !path2()  && (
      
      <div className="">
         <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <NavbarBrand href="/">Curso React APP</NavbarBrand>
            </div>
            {isLogin() && (
              <div className="col-4 text-center">
                  <h5><p className="font-weight-light"><FaRegUser/> : {localStorage.getItem('user')}</p></h5>
              </div>
            )}
            <div className="col-4 d-flex justify-content-end align-items-center">
              
              {isLogin()  ?  
                (
                  <a onClick={logout} className="btn btn-sm btn-outline-secondary" ><FaPowerOff/> Sesión</a>
                ) : 
                (
                  <NavLink tag={RRNavLink} className="btn btn-sm  btn-outline-secondary" exact to="/login" activeClassName="active"><FaRegUser/>Sesión</NavLink>
                )
              }
              
            </div>
          </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <NavLink tag={RRNavLink} exact to="/" activeClassName="active"><FaHome/> Home</NavLink>
                {isLogin()  && (<NavLink tag={RRNavLink} exact to="/dashboard/users/create" activeClassName="active"><FaRegUser/>Nuevo usuario</NavLink>
                  )}
                {isLogin()  && (<NavLink tag={RRNavLink} exact to="/dashboard/users" activeClassName="active"><FaList/>Usuarios</NavLink>
                  )}
            </nav>
        </div>
        
    </div>
      
      
    );
  }

  export default Header;
