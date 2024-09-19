export const formatDate = (date: Date) => {
  const date_object = new Date(date)
  const day = date_object.getDate()
  const month = date_object.getMonth() + 1
  const year = date_object.getFullYear()

  const formatedDate = `${day}/${month}/${year}`
  return formatedDate
}

export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600000)
  const minutes = Math.floor((duration % 3600000) / 60000)
  const seconds = Math.floor((duration % 60000) / 1000)

  const formattedHours = hours < 10 ? '0' + hours : hours
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}
