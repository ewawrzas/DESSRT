import values from 'lodash/values';

export const selectAllUsers = state => values(state.entities.users);

export const selectAllDesserts = state => values(state.entities.desserts)

export const selectAllCheckins = state => values(state.entities.checkins)

export const selectSingleCheckin = (state, id) => {
  return state.entities.checkins[id];
}

export const selectSingleUser = (state, id) => {
  return state.entities.user[id];
}

export const selectSingleDessert = (state, id) => {
  return state.entities.dessert[id];
}

export const selectDessertCheckins = (state, dessert) => {
  return dessert ? dessert.checkin_ids.map(id => state.entities.checkins[id]) : [];
}

export const selectUserCheckins = (state, user) => {
  return user ? user.checkin_ids.map(id => state.entities.checkins[id]) : [];
}
