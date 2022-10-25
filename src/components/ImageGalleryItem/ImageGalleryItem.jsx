import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(image => (
        <li className={css.item} key={image.id}>
          <img src={image.webformatURL} alt="" className={css.imgItem} />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
