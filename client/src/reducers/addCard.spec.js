import {AddCard} from '../actions/actions';
import {lists} from './lists';
import deepFreeze from 'deep-freeze';

it('should append a card an empty list', () => {
  const stateBefore = [
    {
      name:"first list",
      position:0,
      cards:[],
      id:0
    }
  ];
  const action = AddCard("first card", 0);
  const stateAfter = [
    {
      name:"first list",
      position:0,
      cards:[
        {
          info: 'first card',
          position: 0,
          id: action.id
        }
      ],
      id:0
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    lists(stateBefore, action)
  ).toEqual(stateAfter);
});

it('should append a card an non-empty list', () => {
  const stateBefore = [
    {
      name:"first list",
      position:0,
      cards:[
        {
          info: 'first card',
          position: 0,
          id: 0
        }
      ],
      id:0
    }
  ];
  const action = AddCard("second card", 0);
  const stateAfter = [
    {
      name:"first list",
      position:0,
      cards:[
        {
          info: 'first card',
          position: 0,
          id: 0
        },
        {
          info: 'second card',
          position: 1,
          id: action.id
        },
      ],
      id:0
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    lists(stateBefore, action)
  ).toEqual(stateAfter);
});

it('should add a card an list have no cards', () => {
  const stateBefore = [
    {
      name:"first list",
      position:0,
      id:0
    }
  ];
  const action = AddCard("first card", 0);
  const stateAfter = [
    {
      name:"first list",
      position:0,
      cards:[
        {
          info: 'first card',
          position: 0,
          id: action.id
        }
      ],
      id:0
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    lists(stateBefore, action)
  ).toEqual(stateAfter);
});