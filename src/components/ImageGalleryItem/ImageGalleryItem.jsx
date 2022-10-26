import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ webformatURL, id, largeImageURL, tags }) => (
        <li className={css.item} key={id}>
          <img
            src={webformatURL}
            alt={tags}
            className={css.imgItem}
            onClick={() => onClick(largeImageURL)}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
