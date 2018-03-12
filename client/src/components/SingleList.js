import React from 'react';
import {CardList} from "./CardList";
import {AddCard, DeleteList, DragCardToOtherList, RenameList} from '../actions/actions';

export class SingleList extends React.Component{
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.deleteThisList = this.deleteThisList.bind(this);
    this.onListNameChange = this.onListNameChange.bind(this);
  }

  addCard() {
    this.props.store.dispatch(AddCard(this.cardInfo.value, this.props.list.id));
    this.cardInfo.value = '';
  }

  deleteThisList() {
    this.props.store.dispatch(DeleteList(this.props.list.id));
  }

  onListNameChange() {
    this.props.store.dispatch(RenameList(this.props.list.id, this.listName.value));
  }

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDrop = (e, dropListId) => {
    this.props.store.dispatch(DragCardToOtherList(
      e.dataTransfer.getData("dragListId"),
      e.dataTransfer.getData("dragCardId"),
      e.dataTransfer.getData("dragCardInfo"),
      dropListId));
  };

  render() {
    return (
      <div
        style={{
          margin: '20px'
        }}
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e)=>{this.onDrop(e, this.props.list.id)}}
      >
        <input
          ref={node => this.listName = node}
          value={this.props.list.name}
          placeholder='List name'
          onChange={this.onListNameChange}
        />
        <button
          onClick={this.deleteThisList}
        >X</button>
        <CardList
          cards={this.props.list.cards}
          listId={this.props.list.id}
          store={this.props.store}
        />
        <input
          ref={node => this.cardInfo = node}
          placeholder='Add a card'
        />
        <button
          onClick={this.addCard}
        >+</button>
      </div>
    )
  };
}