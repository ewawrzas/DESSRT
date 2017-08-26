import values from 'lodash/values';

export const selectAllUsers = state => values(state.entities.users);

export const selectAllDesserts = state => values(state.entities.desserts)
