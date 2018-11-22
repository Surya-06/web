import React , {Component} from 'react';
import M from 'materialize-css';
import '../stylesheets/materialize.css';
import '../stylesheets/navbar.css';

class NavBar extends Component{
    componentDidMount(){
        M.Sidenav.init(document.querySelectorAll('.sidenav'),{});
    }
    render(){
        return(
            <div>
            <div className="navbar-fixed transparent">
            <nav className='transparent'>
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col s12 m6">
                            <a href="#" className="brand-logo center-align flow-text" >Surya Prakash Susarla</a>
                        </div>
                        <div className="col m6">
                            <ul className="right hide-on-med-and-down">
                                <li><a href="https://linkedin.com/in/surya-prakash-susarla" target="_blank" className="flow-text">Linked In</a></li>
                                <li><a href="https://github.com/Surya-06" target="_blank" className="flow-text">Github</a></li>
                                <li><a href="https://www.facebook.com/ronaldo.alex.7545" target="_blank"  className="flow-text">Facebook</a></li>
                                <li><a href="https://drive.google.com/file/d/1LhVsQHImLNHBN_EibQ8tqWzuygiqko0n/view?usp=sharing" target="_blank" className="flow-text">Résumé</a></li>
                            </ul>
                        </div>
                    <a href="" data-target="show-nav" className="sidenav-trigger left"><i className="material-icons">sort</i></a>
                    </div>
                </div>
            </nav>
            </div>
            <div className='row'>
                    <div className='col s9'>
            <ul className="sidenav" id="show-nav">
                
                        <li>
                            < div className = "user-view  grey darken-3" ></div>
                            <div className="section"></div>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/surya-prakash-susarla" target="_blank" className="flow-text center-align">Linked In</a>
                            <div className="divider"></div>
                            <div className="section"></div>
                        </li>
                        <li>
                            <a href="https://github.com/Surya-06" target="_blank" className="flow-text center-align">Github</a>
                            <div className="divider"></div>
                            <div className="section"></div>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ronaldo.alex.7545" target="_blank"  className="flow-text center-align">Facebook</a>
                            <div className="divider"></div>
                            <div className="section"></div>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1LhVsQHImLNHBN_EibQ8tqWzuygiqko0n/view?usp=sharing" target="_blank" className="flow-text center-align">Résumé</a>
                            <div className="divider"></div>
                        </li>
            </ul>
            
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;