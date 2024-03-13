export const formatDate = (date: Date) => {
  const date_object = new Date(date)
  const day = date_object.getDate();
  const month = date_object.getMonth() + 1; 
  const year = date_object.getFullYear();

  const formatedDate = `${day}/${month}/${year}`;
  return formatedDate
}

export const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + formattedSeconds;
}