export const fetchSingleDessert = (id) => {
  return $.ajax({
    url: `api/desserts/${id}`,
    method: 'GET'
  });
}

export const createDessert = (data) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/desserts',
    data
  });
}

export const fetchAllDesserts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/desserts'
  })
)
