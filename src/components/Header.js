import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render() {

        return (

            <div className="header">
                {/* <img src="/img/cg-logo.jpg" alt="cg-logo"/> */}
                <NavLink to="/" exact={true}>  <div className="header-title">Expensify</div> </NavLink>
            </div>
        
        )
    }

}








export default Header;

