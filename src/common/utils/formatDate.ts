export const formatDate = (date: Date | string): string => {
  const now = new Date();
  const targetDate = new Date(date);

  const timeDifferenceInSeconds = (now.getTime() - targetDate.getTime()) / 1000;
  const oneMinuteInSeconds = 60;
  const oneHourInSeconds = 60 * 60;
  const oneDayInSeconds = 24 * 60 * 60;

  if (timeDifferenceInSeconds < oneMinuteInSeconds) {
    return 'Just now';
  } else if (timeDifferenceInSeconds < oneHourInSeconds) {
    const minutesAgo = Math.floor(timeDifferenceInSeconds / oneMinuteInSeconds);
    return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifferenceInSeconds < oneDayInSeconds) {
    const hoursAgo = Math.floor(timeDifferenceInSeconds / oneHourInSeconds);
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifferenceInSeconds < 2 * oneDayInSeconds) {
    return 'Yesterday';
  } else if (timeDifferenceInSeconds < 7 * oneDayInSeconds) {
    const daysAgo = Math.floor(timeDifferenceInSeconds / oneDayInSeconds);
    return `${daysAgo} days ago`;
  } else {
    return targetDate.toLocaleString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
};
