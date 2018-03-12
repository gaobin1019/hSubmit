import {EditCard} from "../actions/actions";
import deepFreeze from 'deep-freeze';
import {lists} from './lists';

it('should edit a card info', () => {
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
  const action = EditCard(0, 0, 'first card changed info');
  const stateAfter = [
    {
      name:"first list",
      position:0,
      cards:[
        {
          info: 'first card changed info',
          position: 0,
          id: 0
        }
      ],
      id:0
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});

it('should find that card and edit that card info', () => {
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
  const action = EditCard(0, 1, 'second card changed info');
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
          info: 'second card changed info',
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

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});

it('should find that list and that card and edit that card info', () => {
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
    },
    {
      name:"second list",
      position:1,
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
      id:1
    },
    {
      name:"third list",
      position:2,
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
      id:2
    }
  ];
  const action = EditCard(1, 2, 'third card changed info');
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
          id: 1
        },
        {
          info: 'third card',
          position: 2,
          id: 2
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
          id: 0
        },
        {
          info: 'second card',
          position: 1,
          id: 1
        },
        {
          info: 'third card changed info',
          position: 2,
          id: 2
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
      id:2
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});