export const requestSingleUser = (id) => (
  return $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);
