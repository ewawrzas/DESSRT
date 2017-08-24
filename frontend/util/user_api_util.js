export const fetchSingleUser = (id) => (
  return $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  })
);
