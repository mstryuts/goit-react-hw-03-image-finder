import { Component } from 'react';
import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from './Api';
import Loader from './Loader/Loader';

import Modal from './Modal/Modal';

class App extends Component {
  state = {
    searchImgValue: '',
    page: 1,
    images: [],
    endOfSearch: false,
    isLoading: false,
    error: null,
    largeImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchImgValue, page } = this.state;

    if (prevState.searchImgValue !== searchImgValue) {
      this.fetchData();
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
    if (searchValue !== this.state.searchImgValue) {
      this.setState({
        searchImgValue: searchValue,
        images: [],
        page: 1,
        endOfSearch: false,
      });
    }
  };
  toggleModal = () => {
    this.setState({ largeImg: '' });
  };

  getLargeImg = url => {
    this.setState({
      largeImg: url,
    });
  };

  render() {
    const { isLoading, images, endOfSearch, largeImg } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery images={images} onClick={this.getLargeImg} />
        {isLoading && (
          <div
            style={{
              margin: '0 auto',
            }}
          >
            <Loader />
          </div>
        )}
        {images.length > 0 && !endOfSearch && (
          <Button loadMore={this.fetchData} />
        )}

        {largeImg && (
          <Modal onClick={this.toggleModal} imgSrc={largeImg}></Modal>
        )}
      </div>
    );
  }
}

export default App;
