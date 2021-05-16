import Login from "./Login";
import NotFoundPage from "./NotFoundPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Addbook from "./Addbook";
import Book from "./Book";
import ListOfBooks from "./ListOfBooks";
import React from 'react';
import App from "./App";
import Register from "./Register";


function RoutesConf() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Register/>
                </Route>
                <Route exact path="/signin">
                    <Login/>
                </Route>
                <Route exact path="/home">
                    <ListOfBooks/>
                </Route>
                <Route exact path="/add">
                    <Addbook/>
                </Route>
                <Route
                    path="/books/:id"
                    render={(props) =>
                        <React.Fragment>
                            <Book {...props} />
                        </React.Fragment>
                    }
                />
                <Route exact path="/add">
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>

)
}

export default RoutesConf;
