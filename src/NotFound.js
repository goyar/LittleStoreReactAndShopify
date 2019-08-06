import React from 'react';
import MainComponent from './MainContainer';

class NotFound extends React.Component{
    render(){
        return(
            <MainComponent activePage='/notfound'>
                <h1 className="page-header">Not Found</h1>
                <p>Page Not Found</p>
            </MainComponent>
        )
    }
}

export default NotFound;