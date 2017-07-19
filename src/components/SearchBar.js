import React from "react";
import { Input } from "semantic-ui-react";
import '../style/style.css'
class SearchBar extends React.Component {
  componentWillMount() {
    this.state = { term: "Your Video " };
  }

  render() {
    return (
      <Input className='search-bar'
        value={this.state.term}
        onChange={event => {
           this.setState({ term: event.target.value })
        } }
        onKeyPress = { e => this._handleKeyPress(e) }
        icon="search"
        placeholder="Search..."
      />
    );
  }
  _handleKeyPress = (e) => {
      if(e.key === 'Enter') {
        this.props.onSearchChange(this.state.term)
    }
  }
}

export default SearchBar;
