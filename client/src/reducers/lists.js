import {ADD_CARD, ADD_LIST, DEL_CARD, DEL_LIST, DRAG_CARD_TO_LIST, EDIT_CARD, RENAME_LIST} from '../actions/actions';

export const lists = (state=[], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        {
          name: action.name,
          position: state.length,
          cards: [],
          id: action.id
        }
      ];
    case DEL_LIST:
      let deleted1 = false; //fix this todo
      return state.reduce((resultList, list) => {
        if (list.id === action.listId) {
          deleted1 = true;
          return resultList;
        }
        if (deleted1) {
          resultList.push({
            ...list,
            position : list.position - 1
          });
        } else {
          resultList.push(list);
        }
        return resultList;
      }, []);
    case RENAME_LIST:
      return state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            name: action.listNewName
          };
        } else {
          return list;
        }
      });
    case ADD_CARD:
      return state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            cards: addCard(list.cards, action.info, action.id)
          };
        }
        return list;
      });
    case DEL_CARD:
      return state.reduce((result, list) => {
        if (list.id === action.listId) {
          result.push({
            ...list,
            cards: cards(list.cards, action.cardId),
          });
          return result;
        }
        result.push(list);
        return result;
      }, []);
    case EDIT_CARD:
      return state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            cards: list.cards.map(card => {
              if (card.id === action.cardId) {
                return {
                  ...card,
                  info: action.newInfo
                }
              } else {
                return card;
              }
            })
          };
        } else {
          return list;
        }
      });
    case DRAG_CARD_TO_LIST:
      if (action.dragListId === action.dropListId) {
        return state;
      }
      return state.map(list => {
        if (list.id === action.dragListId) {
          return {
            ...list,
            cards: list.cards.filter(card => {
              return card.id !== action.dragCardId;
            })
          }
        } else if (list.id === action.dropListId) {
          return {
            ...list,
            cards: list.cards ? [
              ...list.cards,
              {
                id: action.dragCardId,
                info: action.dragCardInfo,
                position: list.cards.length
              }
            ] : [{  id: action.dragCardId, info: action.dragCardInfo, position: 0 }]
          }
        } else {
          return list;
        }
      });
    default:
      return state;
  }
};

const cards = (cards, cardId) => {
  let deleted = false;
  return cards.reduce((cardResult, card) => {
    if (card.id === cardId) {
      deleted = true;
      return cardResult;
    }
    cardResult.push(deleted ? {
      ...card,
      position: card.position - 1
    } : card);
    return cardResult;
  }, []);
};

const addCard = (cards, cardInfo, cardId) => {
  if (cards) {
    return [
      ...cards,
      {
        info: cardInfo,
        id: cardId,
        position: cards.length
      }
    ]
  } else {
    return [{
      info: cardInfo,
      position: 0,
      id: cardId
    }];
  }
};