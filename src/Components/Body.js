import React , {Component} from 'react';
import M from 'materialize-css';
import '../stylesheets/materialize.css';
import '../stylesheets/body.css';

import background1 from '../res/background1.jpg';
import background2 from '../res/background2.jpg';


class Body extends Component{

    componentDidMount(){
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems,{});
    }

    render(){
        return(
            <div style={{display:'inline'}}>
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img src={background1} />
                    </div>
                </div>
                <div className='row borderText blue lighten-4' style={{margin:0}}>
                    <div className='col s12 l6 offset-l3'>
                        <div className='card-panel blue lighten-3 hoverable '>
                            <h5 className='center-align'> SAMPLE TEXT </h5>
                        </div>
                    </div>
                </div>
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