import React, { Component } from 'react';
import Select from 'react-select';

import Input from '../../components/Input';
import Button from '../../components/Button';

import s from './Menu.module.css';
import b from '../../components/Button/Button.module.css';
import i from '../../components/Input/Input.module.css';

import routers from '../../config/routers';
import * as API from '../../services/menu';

const DEFAULT_STATE = {
  name: 'Default name',
  description: 'Default description',
  image:
    'http://www.anchorinnwhittier.com/admin/cocktail/server/php/files/default-image.png',
  price: '1',
  category: 'main course',
  ingredients: ['Default ingredients'],
};

class MenuNewItem extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    price: '',
    category: '',
    ingredients: '',
    categories: [],
  };

  componentDidMount() {
    API.getCategories().then(categories => this.setState({ categories }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSelectChange = selectedOption => {
    this.setState({ category: selectedOption.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const {
      name,
      description,
      image,
      price,
      category,
      ingredients,
    } = this.state;

    const item = {
      name: name || DEFAULT_STATE.name,
      description: description || DEFAULT_STATE.description,
      image: image || DEFAULT_STATE.image,
      price: price || DEFAULT_STATE.price,
      category: category || DEFAULT_STATE.category,
      ingredients:
        ingredients !== ''
          ? ingredients.split(/[,] |[,]/)
          : DEFAULT_STATE.ingredients,
    };

    API.addMenuItem(item).then(this.goBack);
  };

  goBack = () => {
    const { history } = this.props;

    history.push({ pathname: routers.MENU.root });
  };

  render() {
    const {
      name,
      description,
      image,
      price,
      ingredients,
      categories,
    } = this.state;

    return (
      <>
        <form className={s.form} onSubmit={this.handleFormSubmit}>
          <Input
            className={i.input}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <Input
            className={i.input}
            type="number"
            placeholder="Price"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
          <Input
            className={i.input}
            type="text"
            placeholder="Image"
            name="image"
            value={image}
            onChange={this.handleChange}
          />
          <Input
            className={i.input}
            type="text"
            placeholder="Ingredients"
            name="ingredients"
            value={ingredients}
            onChange={this.handleChange}
          />
          <Select
            onChange={this.handleSelectChange}
            options={categories}
            placeholder="Select category"
          />
          <textarea
            className={s.textarea}
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
            cols="45"
            rows="3"
          />
          <Button className={b.btn} type="submit">
            Add item
          </Button>
        </form>
      </>
    );
  }
}
export default MenuNewItem;
