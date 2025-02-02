export const date = (unixDate) => {
  const timestamp = new Date(unixDate * 1000);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return `${days[timestamp.getDay()]}, ${timestamp.getDate()} ${months[timestamp.getMonth()]}`;
};

export const sun = (unixSun) => {
  const hours = new Date(unixSun * 1000).getHours();
  const minutes = new Date(unixSun * 1000).getMinutes();
  const last2Digits = minutes.toString().padStart(2, "0");
  return `${hours}:${last2Digits}`;
};
