import React from 'react'

class SearchBar extends React.Component{

    componentWillMount(){
        this.state = { term: 'Your Video '  }
    }

    render(){
        return <input 
        value = {this.state.term}
        onChange = { event => this.setState( { term: event.target.value  } ) } />
    }
}

export default SearchBar