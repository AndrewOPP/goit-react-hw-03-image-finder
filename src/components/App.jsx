import React, { useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import { loadingSpinner } from './LoadingSpinner/LoadingSpinner';
import { StyledButton } from './ImageGallery/ImageGallery.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
axios.defaults.baseURL = 'https://pixabay.com/api/';

let imagess;
let rightImages = [];
let totalHits;
const MYKEY = '39188541-a1bd6d68f6e7210f6abdbcfe1';

export function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoadind, setIsLoadind] = useState(false);

  // const requestImages = async () => {

  // };
  useEffect(() => {
    if (!query) return;
    async function requestImages() {
      try {
        imagess = await axios.get(
          `?q=${query}&page=${page}&key=${MYKEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        if (imagess.data.hits.length === 0)
          return toast.error('No images found');

        totalHits = imagess.data.totalHits;
        rightImages = [...rightImages, ...imagess.data.hits];
        setImages(rightImages);
      } catch (error) {
      } finally {
        setIsLoadind(false);
      }
    }
    requestImages();
  }, [page, query]);

  const currentQuery = text => {
    if (text === query) return;
    setImages([]);
    setIsLoadind(true);
    setPage(1);
    setQuery(text);
    rightImages = [];
  };

  const loadMore = async () => {
    await setPage(page + 1);
  };

  return (
    <>
      <SearchBar onCurrentQuery={currentQuery} />
      <>{isLoadind ? loadingSpinner : <ImageGallery images={images} />}</>
      {totalHits / 12 >= page ? (
        <StyledButton onClick={loadMore}>Load more</StyledButton>
      ) : null}
      <Toaster />
    </>
  );
}
