export const fetchSingleDessert = (id) => (
 $.ajax({
    url: `api/desserts/${id}`,
    method: 'GET'
  })
);

export const createDessert = (dessert) => {
  return $.ajax({
    method: 'POST',
    url: `api/desserts/${dessert.id}`,
    data: { dessert }
  });
}

export const fetchAllDesserts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/desserts'
  })
)
