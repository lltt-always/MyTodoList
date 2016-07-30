import React, { Component } from 'react'

class Header extends Component {

    render() {
        const title = "todos";
        return (
            <header className="header">
                <h1>{ title }</h1>   
            </header>
        )
    }
}

export default Header