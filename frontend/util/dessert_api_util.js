export const fetchSingleDessert = (id) => {
  return $.ajax({
    url: `api/desserts/${id}`,
    method: 'GET'
  });
}

export const createDessert = (dessert) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/desserts',
    contentType: false,
    processData: false,
    data: dessert
  });
}

export const fetchAllDesserts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/desserts'
  })
)
