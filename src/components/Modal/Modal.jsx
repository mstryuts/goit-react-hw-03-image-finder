import { Component } from 'react';
import css from '../Modal/Modal.module.css';

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
