import { Component, createRef } from 'react';

class Modal extends Component {
  containerRef = createRef();

  state = { onOpen: false, dataResult: [], tabIndex: 0 };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleWindowKeydown);
  }

  handleWindowClick = e => {
    if (this.containerRef.current === e.target) {
      e.preventDefault();
      this.close();
    }
  };

  handleWindowKeydown = e => {
    if (e.keyCode === 27) {
      this.close();
    }
  };

  open = number => {
    this.setState({ onOpen: true });

    if (number) this.setState({ tabIndex: number });

    if (this.props.getDataById) this.props.getDataById(number);
  };

  close = () => this.setState({ onOpen: false });

  render() {
    const { onOpen, dataResult, tabIndex } = this.state;

    return this.props.children({
      isOpen: onOpen,
      data: dataResult,
      open: this.open,
      close: this.close,
      ref: this.containerRef,
      index: tabIndex,
    });
  }
}

export default Modal;
