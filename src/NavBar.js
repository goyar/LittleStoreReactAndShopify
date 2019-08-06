import React from 'react'

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activePage: props.activePage
        };
    }

    render(){
        return(
            <nav className="navbar fixed-top navbar-expand-sm bg-light navbar-light">
                <a className="navbar-brand" href="/">MyLitteStore.ca</a>
                <ul className="navbar-nav">
                    {this.state.activePage === '/order' && 
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Back to Buy</a>
                    </li>
                }
                </ul>
            </nav>
        );
    }
}

export default NavBar;