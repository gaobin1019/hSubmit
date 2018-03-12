import React from 'react';
import {SingleList} from "./SingleList";

export const Lists = (props) => {
  return (
    <ul>
      {props.lists ? props.lists.map(list => (
        <SingleList
          list={list}
          key={list.id}
          store={props.store}
        />
      )) : null}
    </ul>
  );
};