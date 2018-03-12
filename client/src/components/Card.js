import React from 'react';
import {DelCard, EditCard} from '../actions/actions';

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.onDeleteCard = this.onDeleteCard.bind(this);
    this.onCardInfoChange = this.onCardInfoChange.bind(this);
  }

  onDeleteCard() {
    this.props.store.dispatch(DelCard(this.props.card.id, this.props.listId));
  }

  onCardInfoChange() {
    this.props.store.dispatch(EditCard(this.props.listId, this.props.card.id, this.cardInfo.value));
  }

  onDragStart = (e, dragListId, dragCardId, dragCardInfo) => {
    e.dataTransfer.setData("dragCardId", dragCardId);
    e.dataTransfer.setData("dragCardInfo", dragCardInfo);
    e.dataTransfer.setData("dragListId", dragListId);
  };

  render() {
    return (
      <div>
        <input
          draggable
          onDragStart={(e) => this.onDragStart(e, this.props.listId, this.props.card.id, this.props.card.info)}
          ref={node => this.cardInfo = node}
          value={this.props.card.info}
          placeholder='edit card Info'
          onChange={this.onCardInfoChange}
        />
        <button
          onClick={this.onDeleteCard}
        >X</button>
      </div>
    );
  }
}