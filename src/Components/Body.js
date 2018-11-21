import React , {Component} from 'react';
import M from 'materialize-css';
import '../stylesheets/materialize.css';


import background1 from '../res/background1.png';
import background2 from '../res/background2.jpg';


class Body extends Component{

    componentDidMount(){
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems,{});
    }

    render(){
        return(
            <div style={{position:'static'}}>
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img src={background1} />
                    </div>
                </div>
                <h1>HELLO WORLD</h1> 
                <h1>THIS IS TESTER TEXT</h1> 
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img src={background2} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;