import data from '../data/auth'
import React from 'react';
import ReactDOM from 'react-dom';
import utilFun from 'utilFun';

class AuthMain extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name       : 'Eric',
            unreadCount: 1000
        };
    }

    render() {
        let {name, unreadCount} = this.state;
        return (
            <p>
                Hello <b>{name}</b>, you have
            </p>
        );
    }
}

utilFun.domReady(function(){
    ReactDOM.render(
        <AuthMain />,
        document.getElementById('containerTest')
    );
})