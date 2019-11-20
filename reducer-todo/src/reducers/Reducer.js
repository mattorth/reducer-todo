import React from "react";

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const Reducer = (state,action) => {

    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];
        case "TOGGLE_COMPLETED":
            return state.map(listItem => {
                    if (listItem.id === action.payload) {
                      return {
                        ...listItem,
                        completed: !listItem.completed
                      };
                    }
                    return listItem
                  })
        case "CLEAR_COMPLETED":
            return state.filter(listItem => {
                return !listItem.completed;
              })
        default:
            return state;
    }
}
