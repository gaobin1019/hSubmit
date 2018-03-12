import {AddList} from '../actions/actions';
import {lists} from './lists';
import deepFreeze from 'deep-freeze';

it('should add a empty list to an empty board', () => {
  const stateBefore = [];
  const action = AddList("first list");
  const stateAfter = [
    {
      "name":"first list",
      "position":0,
      "cards":[],
      "id":action.id
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    lists(stateBefore, action)
  ).toEqual(stateAfter);
});

it('should add a empty list to a non-empty board', () => {
  const stateBefore = [
    {
      "name":"first list",
      "position":0,
      "cards":[],
      "id":0
    }
  ];
  const action = AddList("first second");
  const stateAfter = [
    {
      "name":"first list",
      "position":0,
      "cards":[],
      "id":0
    },
    {
      "name":"first second",
      "position":1,
      "cards":[],
      "id":action.id
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    lists(stateBefore, action)
  ).toEqual(stateAfter);
});