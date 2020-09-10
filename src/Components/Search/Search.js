import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  changeHandler = (event) => {
    this.setState({search: event.target.value})
  }

  searchBookInput = (event) => {
    event.preventDefault()
    this.props.searchBooks(this.state.search)
    this.setState({search: ''})
  }

  render() {
    return (
      <section>
      <input id="search-input" aria-label="search" className="search-input" type="search" placeholder="search" name="search"
        onChange={this.changeHandler}
        value={this.state.search}
      />
      <button className="search-button" onClick={this.searchBookInput}>Search</button>
      </section>
    )
  }
}

export default Search