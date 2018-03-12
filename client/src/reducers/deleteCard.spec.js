import {lists} from "./lists";
import {DelCard} from "../actions/actions";

it('should be able to delete a card from a list have that card', () => {
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
  const action = DelCard(0, 0);
  const stateAfter = [
    {
      name:"first list",
      position:0,
      cards:[],
      id:0
    }
  ];

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});

it('should be able to delete last card from a list have more than 1 cards', () => {
  const stateBefore = [
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
          id: 1
        }
      ],
      id:0
    }
  ];
  const action = DelCard(1, 0);
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
    }
  ];

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});

it('should be able to delete a middle in the middle', () => {
  const stateBefore = [
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
          id: 1
        },
        {
          info: 'third card',
          position: 2,
          id: 2
        }
      ],
      id:0
    }
  ];
  const action = DelCard(1, 0);
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
          info: 'third card',
          position: 1,
          id: 2
        }
      ],
      id:0
    }
  ];

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});