import values from 'lodash/values';

export const selectAllUsers = state => values(state.entities.users);
