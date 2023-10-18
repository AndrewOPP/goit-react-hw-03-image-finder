import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import { loadingSpinner } from './LoadingSpinner/LoadingSpinner';
import { StyledButton } from './ImageGallery/ImageGallery.styled';
import toast, { Toaster } from 'react-hot-toast';
axios.defaults.baseURL = 'https://pixabay.com/api/';

let images;
let rightImages = [];
let totalHits;
const MYKEY = '39188541-a1bd6d68f6e7210f6abdbcfe1';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoadind: false,
    page: 1,
  };

  currentQuery = async text => {
    if (text === this.state.query) return;
    await this.setState({
      query: text,
      isLoadind: true,
      page: 1,
      images: [],
    });
    rightImages = [];
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.requestImages();
    }
  };

  requestImages = async () => {
    try {
      images = await axios.get(
        `?q=${this.state.query}&page=${this.state.page}&key=${MYKEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (images.data.hits.length === 0) return toast.error('No images found');

      totalHits = images.data.totalHits;
      rightImages = [...rightImages, ...images.data.hits];

      this.setState({
        images: rightImages,
      });
    } catch (error) {
    } finally {
      this.setState({
        isLoadind: false,
      });
    }
  };

  loadMore = async () => {
    await this.setState({
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <>
        <SearchBar onCurrentQuery={this.currentQuery} />
        <>
          {this.state.isLoadind ? (
            loadingSpinner
          ) : (
            <ImageGallery images={this.state.images} />
          )}
        </>
        {totalHits / 12 >= this.state.page ? (
          <StyledButton onClick={this.loadMore}>Load more</StyledButton>
        ) : null}
        <Toaster />
      </>
    );
  }
}
