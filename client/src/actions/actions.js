import {v4} from 'uuid';

export const ADD_CARD = 'ADD_CARD';
export const DEL_CARD = 'DEL_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DRAG_CARD_TO_LIST = 'DRAG_CARD_TO_LIST';


export const ADD_LIST = 'ADD_LIST';
export const DEL_LIST = 'DEL_LIST';
export const RENAME_LIST = 'RENAME_LIST';


export const AddList = (name) => ({
  type: ADD_LIST,
  name: name,
  id: v4(),
});

export const DeleteList = (listId) => ({
  type: DEL_LIST,
  listId: listId,
});

export const RenameList = (listId, newName) => ({
  type: RENAME_LIST,
  listId: listId,
  listNewName: newName,
});

export const AddCard = (info, listId) => ({
  type: ADD_CARD,
  info: info,
  id: v4(),
  listId: listId,
});

export const DelCard = (cardId, listId) => ({
  type: DEL_CARD,
  cardId: cardId,
  listId: listId,
});

export const EditCard = (listId, cardId, newInfo) => ({
  type: EDIT_CARD,
  listId: listId,
  cardId: cardId,
  newInfo: newInfo,
});

export const DragCardToOtherList = (dragListId, dragCardId, dragCardInfo, dropListId) => ({
  type: DRAG_CARD_TO_LIST,
  dragListId: dragListId,
  dragCardId: dragCardId,
  dragCardInfo: dragCardInfo,
  dropListId: dropListId,
});