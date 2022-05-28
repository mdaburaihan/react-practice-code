import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

function About(props) {
    console.log(props)
    return <h2>About</h2>
}

function Contact() {
    return <h2>Contact</h2>
}

export default Routing;