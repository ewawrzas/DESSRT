import values from 'lodash/values';

export const selectAllUsers = state => values(state.entities.users);

export const selectAllDesserts = state => values(state.entities.desserts)

export const selectAllCheckins = state => values(state.entities.checkins)

export const selectSingleCheckin = (state, id) => {
  return state.entities.checkins[id];
}
