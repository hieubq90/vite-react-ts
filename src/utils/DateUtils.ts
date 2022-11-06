import dayjs from 'dayjs'

export const formatDate = (date?: number): string => {
  if (date && date > 0) {
    return dayjs.unix(date).format('YYYY.MM.DD')
  }
  return dayjs().format('YYYY.MM.DD')
}

export const formatTime = (date?: number): string => {
  if (date && date > 0) {
    return dayjs.unix(date).format('HH:mm')
  }
  return dayjs().format('HH:mm')
}

export const formatDateTime = (date?: number): string => {
  if (date && date > 0) {
    return dayjs.unix(date).format('YYYY.MM.DD HH:mm')
  }
  return dayjs().format('YYYY.MM.DD HH:mm')
}

export default {
  formatDate,
  formatTime,
  formatDateTime,
}
