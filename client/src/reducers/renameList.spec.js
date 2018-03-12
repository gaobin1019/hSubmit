import {RenameList} from '../actions/actions';
import {lists} from './lists';
import deepFreeze from 'deep-freeze';



it('should rename a list', () => {
  const stateBefore = [
    {
      "name":"first list",
      "position":0,
      "cards":[],
      "id":0
    }
  ];
  const action = RenameList(0, 'first list changed name');
  const stateAfter = [
    {
      "name":"first list changed name",
      "position":0,
      "cards":[],
      "id":0
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});

it('should find and rename a list', () => {
  const stateBefore = [
    {
      "name":"first list",
      "position":0,
      "cards":[],
      "id":0
    },
    {
      "name":"second list",
      "position":1,
      "cards":[],
      "id":1
    },
    {
      "name":"third list",
      "position":2,
      "cards":[],
      "id":2
    }
  ];
  const action = RenameList(1, 'second list changed name');
  const stateAfter = [
    {
      "name":"first list",
      "position":0,
      "cards":[],
      "id":0
    },
    {
      "name":"second list changed name",
      "position":1,
      "cards":[],
      "id":1
    },
    {
      "name":"third list",
      "position":2,
      "cards":[],
      "id":2
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});