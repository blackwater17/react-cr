import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Add from '../components/Add';
import Edit from '../components/Edit';
import Index from '../components/Index';
import Header from '../components/Header';


const AppRouter = () => (

    <BrowserRouter>

        <>

            <Header />

            <Switch>

                <Route
                    exact path='/'
                    render={(props) => (
                    <Index {...props} />
                    
                    )}
                />


                <Route path="/add" component={Add} /> 

                <Route path="/edit" component={Edit} /> 


            </Switch>
        
        </>

        
    </BrowserRouter>
)

export default AppRouter;

