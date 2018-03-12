import {DragCardToOtherList} from '../actions/actions';
import {lists} from './lists';
import deepFreeze from 'deep-freeze';

it('should able to drag and drop a card to an empty list', () => {
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
      cards:[],
      id:1
    }
  ];

  const dragListId = 0;
  const dragCardId = 0;
  const dragCardInfo = 'first card';
  const dropListId = 1;

  const action = DragCardToOtherList(dragListId, dragCardId, dragCardInfo, dropListId);

  const stateAfter = [
    {
      name:"first list",
      position:0,
      cards:[],
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
        }
      ],
      id:1
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});


it('should able to drag and drop a card to an empty list with no cards field', () => {
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
      id:1
    }
  ];

  const dragListId = 0;
  const dragCardId = 0;
  const dragCardInfo = 'first card';
  const dropListId = 1;

  const action = DragCardToOtherList(dragListId, dragCardId, dragCardInfo, dropListId);

  const stateAfter = [
    {
      name:"first list",
      position:0,
      cards:[],
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
        }
      ],
      id:1
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});

it('should able to drag and drop a card to an non-empty list', () => {
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
          id: 10
        },
        {
          info: 'second card',
          position: 1,
          id: 11
        }
      ],
      id:1
    }
  ];

  const dragListId = 0;
  const dragCardId = 0;
  const dragCardInfo = 'first card';
  const dropListId = 1;

  const action = DragCardToOtherList(dragListId, dragCardId, dragCardInfo, dropListId);

  const stateAfter = [
    {
      name:"first list",
      position:0,
      cards:[],
      id:0
    },
    {
      name:"second list",
      position:1,
      cards:[
        {
          info: 'first card',
          position: 0,
          id: 10
        },
        {
          info: 'second card',
          position: 1,
          id: 11
        },
        {
          info: 'first card',
          position: 2,
          id: 0
        }
      ],
      id:1
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});

it('should have no effect dropping to the same list', () => {
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
      cards:[],
      id:1
    }
  ];

  const dragListId = 0;
  const dragCardId = 0;
  const dragCardInfo = 'first card';
  const dropListId = 0;

  const action = DragCardToOtherList(dragListId, dragCardId, dragCardInfo, dropListId);

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
      name:"second list",
      position:1,
      cards:[],
      id:1
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(lists(stateBefore, action)).toEqual(stateAfter);
});
