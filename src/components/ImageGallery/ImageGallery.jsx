import css from '../ImageGallery/ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem images={images} onClick={onClick} />
      </ul>
    </>
  );
};

export default ImageGallery;
