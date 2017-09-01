export const fetchSingleCheckin = (id) => {
  return $.ajax({
    url: `api/checkins/${id}`,
    method: 'GET'
  });
}

export const createCheckin = (checkin) => {
  return $.ajax({
    method: 'POST',
    url: 'api/checkins',
    data: checkin
  });
}

export const fetchAllCheckins = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/checkins',
  });
}

export const updateCheckin = (checkin) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/checkin/${checkin.id}`,
    data: { checkin }
  });
}

export const destroyCheckin = (checkin) => {
  
  return $.ajax({
    url: `api/checkins/${checkin.id}`,
    method: 'DELETE'
  });
};
