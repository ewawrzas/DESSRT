export const fetchSingleUser = (id) => (
 $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);

export const updateUser = (user) => {
debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  });
}



export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
)
