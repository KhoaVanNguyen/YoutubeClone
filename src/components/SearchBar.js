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
        onChange={event => this.setState({ term: event.target.value })}
        icon="search"
        placeholder="Search..."
      />
    );
  }
}

export default SearchBar;
