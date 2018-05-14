const defaultState = {
  tasks: [], // bigger, 10k or jira
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_STUFF': {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          payload,
        ],
      };
    }

    case 'SIMPLE_ACTION': {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          payload,
        ],
      };
    }

    default: {
      return state;
    }
  }
}
