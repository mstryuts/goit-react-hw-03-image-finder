import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

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

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
