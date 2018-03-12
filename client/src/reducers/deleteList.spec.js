import {DeleteList} from "../actions/actions";
import deepFreeze from 'deep-freeze';
import {lists} from "./lists";

it('should delete a list with no cards', () => {
  const stateBefore = [
    {
      "name":"first list",
      "position":0,
      "cards":[],
      "id":0
    }
  ];

  const action = DeleteList(0);
  const stateAfter = [];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    lists(stateBefore, action)
  ).toEqual(stateAfter);
});

it('should delete a list with one card', () => {
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

  const action = DeleteList(0);
  const stateAfter = [];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    lists(stateBefore, action)
  ).toEqual(stateAfter);
});

it('should delete middle list', () => {
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
    },
    {
      name:"second list",
      position:1,
      cards:[
        {
          info: 'first card',
          position: 0,
          id: 1
        }
      ],
      id:1
    },
    {
      name:"third list",
      position:2,
      cards:[
        {
          info: 'first card',
          position: 0,
          id: 2
        }
      ],
      id:2
    }
  ];

  const action = DeleteList(1);

  const stateAfter = [
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
    },
    {
      name:"third list",
      position:1,
      cards:[
        {
          info: 'first card',
          position: 0,
          id: 2
        }
      ],
      id:2
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    lists(stateBefore, action)
  ).toEqual(stateAfter);
});