import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from './Api';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    searchImgValue: '',
    page: 1,
    images: [],
    endOfSearch: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchImgValue, page } = this.state;

    if (prevState.searchImgValue !== searchImgValue) {
      this.fetchData(searchImgValue, page);
    }
  }

  fetchData = async () => {
    const { searchImgValue, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const data = await fetchImages(searchImgValue, page);

      this.setState(prevState => {
        const state = {
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        };

        if (data.totalHits === state.images.length) {
          state.endOfSearch = true;
        }

        return state;
      });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSearch = searchValue => {
    console.log(searchValue);

    if (searchValue !== this.state.searchImgValue) {
      this.setState({
        searchImgValue: searchValue,
        images: [],
        page: 1,
      });
    }
  };

  render() {
    const { isLoading, images, endOfSearch } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery images={images} />
        {images.length > 0 && endOfSearch && (
          <Button loadMore={this.fetchData} />
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}

export default App;
