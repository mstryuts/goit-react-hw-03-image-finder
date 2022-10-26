import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

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
