export const fetchSingleDessert = (id) => {
  return $.ajax({
    url: `api/desserts/${id}`,
    method: 'GET'
  });
}

export const createDessert = (data) => {
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
