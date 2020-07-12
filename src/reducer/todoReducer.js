export const todoReducer = (state, action) => {

    switch(action.type) {

        case 'ADD':
            return [...state,
                {
                    id: Date.now(),
                    text: action.payload,
                }
            ]

        case 'REMOVE':
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }

};