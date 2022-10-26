import { Component } from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPush);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPush);
  }

  handleEscPush = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClick();
    }
  };
  render() {
    const { imgSrc } = this.props;
    return (
      <>
        <div className={css.overlay} onClick={this.handleOverlayClick}>
          <div className={css.modal}>
            <img src={imgSrc} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
