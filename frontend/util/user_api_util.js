export const fetchSingleUser = (id) => (
 $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);

export const updateUser = (formData) => {
debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${formData.user.id}`,
    contentType: false,
    processData: false,
    data: formData
  });
}


export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
)
