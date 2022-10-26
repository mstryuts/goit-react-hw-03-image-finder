import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  handleSearchRequest = e => {
    this.setState({ searchRequest: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchRequest.trim() === '') {
      alert('empty');
      return;
    }

    this.props.onSubmit(this.state.searchRequest);
    this.setState({ searchRequest: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            onChange={this.handleSearchRequest}
            value={this.state.searchRequest}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="search"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
