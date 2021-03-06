//Needs to be in all components that contain JSX
import React, { Component } from 'react';
import './search_bar.css'

//HTML for user to type in to
//Define a new class (SearchBar) and give functionality of React.Component class

// class SearchBar extends Component {
//     render() { 
//         return <input onChange={this.onInputChange}/>;
//     }
//     //handle or on, name of element, what its doing (change, submit, keypress)
//     onInputChange(event) {
//         console.log(event.target.value);
//     }
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};  
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    render() { 
        return (
            <div className='search-bar'>
        <input
        value={this.state.term} 
        onChange={event=> this.onInputChange(event.target.value)} />
        </div> 
        );
    }

}

export default SearchBar;