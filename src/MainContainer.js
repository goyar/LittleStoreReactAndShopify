import React from 'react';
import NavBar from './NavBar';

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activePage: props.activePage
        }
    }

    render(){
        return(
            <div className="App">
                <NavBar activePage={this.state.activePage}></NavBar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MainContainer;