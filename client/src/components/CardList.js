import React from 'react';
import {Card} from "./Card";

export const CardList = (props) => {
  return (
    <ul>
      {props.cards ? props.cards.map(card => (
          <Card
            key={card.id}
            card={card}
            listId={props.listId}
            store={props.store}
          />
        )
      ) : null}
    </ul>
  );
};