import css from '../Button/Button.module.css';

const Button = ({ loadMore }) => {
  //   console.log(this.props.loadMore);
  return (
    <button className={css.button} onClick={loadMore}>
      Load More
    </button>
  );
};

export default Button;
