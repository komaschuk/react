import React, { Component } from 'react';
import queryString from 'query-string';
import Select from 'react-select';

import MenuFilter from './MenuFilter';
import MenuList from './MenuList';
import Button from '../../components/Button';

import s from './Menu.module.css';
import b from '../../components/Button/Button.module.css';

import * as API from '../../services/menu';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

const filterItems = (filter, items) =>
  items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
class Menu extends Component {
  state = {
    filter: '',
    menuItems: [],
    categories: [],
  };

  componentDidMount() {
    API.getCategories().then(categories => {
      this.setState({ categories });
    });

    this.updateMenuItems();
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      this.updateMenuItems();
    }
  }

  updateMenuItems = () => {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      API.getAllMenuItems().then(menuItems => this.setState({ menuItems }));
    } else {
      API.getMenuItemByCategories(category).then(menuItems =>
        this.setState({ menuItems }),
      );
    }
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleSelectChange = selectedOption => {
    const { history, location } = this.props;

    if (selectedOption) {
      history.push({
        pathname: location.pathname,
        search: `category=${selectedOption.value}`,
      });
    } else {
      history.push({
        pathname: location.pathname,
        search: null,
      });
    }
  };

  handleButtonClick = () => {
    const { history, match } = this.props;
    history.push({
      pathname: `${match.url}/add`,
    });
  };

  render() {
    const { filter, menuItems, categories } = this.state;
    const filteredItems = filterItems(filter, menuItems);
    const currentCategory = {
      value: getCategoryFromProps(this.props),
      label: getCategoryFromProps(this.props),
    };

    return (
      <div className={s.container}>
        <div className={s.btnContainer}>
          <Button
            className={b.btn}
            type="submit"
            onClick={this.handleButtonClick}
          >
            Add new menu item
          </Button>
        </div>

        <div className={s.control}>
          <Select
            isClearable
            value={currentCategory.value ? currentCategory : null}
            onChange={this.handleSelectChange}
            options={categories}
          />
          <MenuFilter
            filter={filter}
            onFilterChange={this.handleFilterChange}
          />
        </div>
        <MenuList items={filteredItems} />
      </div>
    );
  }
}

export default Menu;
