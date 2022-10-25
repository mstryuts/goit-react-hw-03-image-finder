import css from '../ImageGallery/ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem images={images} />
      </ul>
    </>
  );
};

export default ImageGallery;
