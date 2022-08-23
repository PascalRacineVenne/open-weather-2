export const getTime = (unix) => {
  const date = new Date(unix * 1000),
    hours = ('0' + date.getHours()).slice(-2),
    minutes = ('0' + date.getMinutes()).slice(-2);
  const actualTime = `${hours}:${minutes}`;
  return actualTime;
};
