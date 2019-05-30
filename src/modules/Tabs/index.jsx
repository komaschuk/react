import React, { Component } from 'react';
import s from './Tabs.module.css';

class Tabs extends Component {
  state = {
    activeTabIndex: this.props.index,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { activeTabIndex } = this.state;
    return nextState.activeTabIndex !== activeTabIndex;
  }

  changeActiveTabIndex = inx => {
    this.setState({ activeTabIndex: inx });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const { content } = items[activeTabIndex];

    return (
      <div className={s.container}>
        {items.map((item, inx) => (
          <button
            type="button"
            className={inx === activeTabIndex ? s.active : s.item}
            key={item.title}
            onClick={() => {
              this.changeActiveTabIndex(inx);
            }}
          >
            {item.title}
          </button>
        ))}
        <div className={s.content}>{content}</div>
      </div>
    );
  }
}

export default Tabs;
