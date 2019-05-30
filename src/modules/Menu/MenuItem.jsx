import React, { Component } from 'react';
import Comment from '../../components/Comment';
import Button from '../../components/Button';
import * as API from '../../services/menu';
import s from './Menu.module.css';

export default class MenuItemPage extends Component {
  state = {
    name: null,
    description: null,
    image: null,
    price: 0,
    category: null,
    ingredients: [],
  };

  componentDidMount() {
    const { match } = this.props;
    API.getMenuItemById(match.params.id).then(item =>
      this.setState({ ...item }),
    );
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    const { state } = location;
    const { category } = this.state;

    if (state) {
      return history.push(state.from);
    }

    history.push({ pathname: '/menu', search: `?category=${category}` });
  };

  render() {
    const { name, description, image, price, ingredients } = this.state;

    return (
      <div className={s.card}>
        <div className={s.cardInfo}>
          <div
            className={s.cardImg}
            style={{ backgroundImage: `url(${image})` }}
          >
            <p className={s.cardPrice}>{price}</p>
          </div>
          <div>
            <p className={s.cardName}>{name}</p>
            <p className={s.cardDesc}>{description}</p>
          </div>
        </div>

        <ul>
          {ingredients.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Comment />
        <Button type="button" onClick={this.handleGoBack}>
          Back to articles
        </Button>
      </div>
    );
  }
}
