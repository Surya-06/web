import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col">
                    <div className="card blue-grey darken-1">
                        <div className="card-content">
                            <span className="card-title">Tester text</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;