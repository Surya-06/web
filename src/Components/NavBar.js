import React , {Component} from 'react';
import M from 'materialize-css';
import '../stylesheets/materialize.css';

class NavBar extends Component{
    componentDidMount(){
        M.Sidenav.init(document.querySelectorAll('.sidenav'),{});
    }
    render(){
        return(
            <div>
            <div className="navbar-fixed transparent">
            <nav className="transparent">
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col s12 m6">
                            <a href="#" className="brand-logo center-align"><b>Surya Prakash Susarla</b></a>
                        </div>
                        <div className="col m6">
                            <ul className="right hide-on-med-and-down">
                                <li><a href="" className="flow-text">Linked In</a></li>
                                <li><a href="" className="flow-text">Github</a></li>
                                <li><a href="" className="flow-text">Facebook</a></li>
                                <li><a href="" className="flow-text">Résumé</a></li>
                            </ul>
                        </div>
                    <a href="" data-target="show-nav" className="sidenav-trigger left"><i className="material-icons">sort</i></a>
                    </div>
                </div>
            </nav>
            </div>
            <ul className="sidenav" id="show-nav">
                <li>
                    < div className = "user-view  grey darken-3" ></div>
                    <div className="section"></div>
                </li>
                <li>
                    <a href="" className="flow-text center-align">Linked In</a>
                    <div className="divider"></div>
                    <div className="section"></div>
                </li>
                <li>
                    <a href="" className="flow-text center-align">Github</a>
                    <div className="divider"></div>
                    <div className="section"></div>
                </li>
                <li>
                    <a href="" className="flow-text center-align">Facebook</a>
                    <div className="divider"></div>
                    <div className="section"></div>
                </li>
                <li>
                    <a href="" className="flow-text center-align">Résumé</a>
                    <div className="divider"></div>
                </li>
            </ul>
            </div>
        );
    }
}

export default NavBar;