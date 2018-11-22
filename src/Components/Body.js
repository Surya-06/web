import React , {Component} from 'react';
import '../stylesheets/materialize.css';
import '../stylesheets/body.css';

var acheivements = {
    title: 'About Me',
    first_word: 'Apart',
    content: ' from the regular courses taken in college I am pursuing other interesting topics such as Machine Learning, Web Scraping and Image processing as well. I have maintained decent academic track record throughout my schooling and have been maintaing my CGPA above 9.I have attended workshops organised by various tech organisations, some of them are Internet of Things workshop oraganised by Mozilla Firefox and Google Mobile Developer Fest. I have also been selected in the Google Challenge India Scholarship for Andorid Development.Contributing to open source projects and knowing about cutting - edge trends is one of my favorite pastime activities.',
};

var projects = {
    title : 'Projects',
    first_word : 'Please',
    content : ' visit my LinkedIn or GitHub accounts to view all my projects. Thank you :-)'
};

var contacts = {
    title : 'Reach me at ',
    first_word : 'Please ',
    content : ' feel free to reach me at. Email : susarla.surya.prakash.1998@gmail.com',
    email : 'susarla.surya.prakash.1998@gmail.com',
    phone : '+91 888 555 8748'
};

var home = {
    title : 'Welcome !',
    first_word : 'Hello ! ',
    content : 'I am Surya and welcome to my page.I am a Computer Programmer◉ Machine Learning Enthusiast◉ Android App Developer & Web Developer◉ Tech Buff ',
    show_content : true 
};

class Body extends Component{

    constructor(){
        super();
        this.state = {
            title : 'Welcome !',
            first_word : 'Hello ! ',
            content : 'I am Surya and welcome to my page.I am a Computer Programmer◉ Machine Learning Enthusiast◉ Android App Developer & Web Developer◉ Tech Buff ',
            show_content : true 
        }
    };

    changeToAcheivements = () => {
        this.setState({
            title: acheivements.title,
            first_word : acheivements.first_word,
            content : acheivements.content,
            show_content : true
        });
    };

    changeToProjects = () => {
        this.setState({
            title : projects.title,
            first_word : projects.first_word,
            content : projects.content,
            show_content : true 
        });
    };

    changeToContacts = () => {
        this.setState({
            title : contacts.title,
            first_word : contacts.first_word,
            content : contacts.content,
            show_content : false,
            email : contacts.email,
            phone : contacts.phone
        });
    };

    changeToHome = () => {
        this.setState({
            title : home.title,
            first_word : home.first_word,
            content : home.content,
            show_content : true 
        });
    };

    render(){
        return(
            <div>
                <div className='parallax-container'>
                    <div className='parallax'></div>
                </div>
                <div className='row'>
                    <div className='col s12 l8 offset-l2'>
                        <div className="card blue-grey darken-4 hoverable">
                            <div className="card-content">
                                <span className="card-title deep-orange-text center-align"><h2>{this.state.title}</h2></span>
                                <div className='divider'></div>
                                {
                                    this.state.show_content ?
                                        <p className = 'flow-text center-align'> <span style={{fontSize:'25pt'}}>{this.state.first_word}</span> {this.state.content} </p>
                                    :
                                    <div className='center-align'>
                                        <a href='mailto : {this.state.email}' className='flow-text'> Email : {this.state.email} </a>
                                        <br />
                                        <a className='flow-text'> Phone : {this.state.phone} </a>
                                    </div>
                                }
                            </div>
                            <div className="card-action center-align">
                                <a onClick={this.changeToAcheivements} className='flow-text'>Acheivements</a>
                                <a onClick={this.changeToProjects} className='flow-text'>Projects</a>
                                <a onClick={this.changeToContacts} className='flow-text'>Contact</a>
                                <a onClick={this.changeToHome} className='flow-text'>Home</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='parallax-container'>
                    <div className='parallax'></div>
                </div>
            </div>
        );
    }
}

export default Body;