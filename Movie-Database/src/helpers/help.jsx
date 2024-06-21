export const getClassByRate = (rating) => {
  if (rating >= 8) {
    return 'green';
  } else if (rating >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
};

export const ratingToPercentage = (rating) => {
  return ((rating / 10) * 100).toFixed(0);
};

export const minutesTohours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${hours}h ${mins}m`;
};

export const truncate = (str, length) => {
  return str?.length > length ? str.slice(0, length) + '...' : str;
};
