import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  // callback method
  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value })
    console.log("On Input Change: ", this.state.searchTerm)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log('my props ', this.props)
    // make sure we call callback from parent component
    // parent function is onSearchTermSubmit
    this.props.onFormSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.searchTerm} 
              onChange={this.onInputChange}  
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;