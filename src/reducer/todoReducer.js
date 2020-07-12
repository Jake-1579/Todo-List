export const todoReducer = (state, action) => {

    const {payload, type} = action;

    switch(type) {

        case 'ADD':
            return [...state,
                {
                    id: Date.now(),
                    text: payload,
                }
            ]

        case 'REMOVE':
            return state.filter(item => item.id !== payload);

        default:
            return state;
    }

};