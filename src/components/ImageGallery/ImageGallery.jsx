import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledUl, StyledLi } from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (
    <StyledUl className="gallery">
      {images.map(elem => (
        <StyledLi key={elem.id}>
          <ImageGalleryItem img={elem} />
        </StyledLi>
      ))}
    </StyledUl>
  );
}
