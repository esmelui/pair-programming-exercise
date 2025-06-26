// expecting time to be a string in the format like '8:15' or '12:30'
const TIME_MAP = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'quarter',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'half'
];

function convertOclock(hour) {
  return TIME_MAP[hour] + " o'clock";
}

function convertPastTime(hour, min) {
  return TIME_MAP[min] + " past " + TIME_MAP[hour];
}

function convertToTime(hour, min) {
  const toTime = 60 - min;
  return TIME_MAP[toTime - 1] + " to " + TIME_MAP[hour + 1];
}

function convertTimeToWords(time) {
  //  Special cases
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  const timeArray = time.split(':');
  const hour = parseInt(timeArray[0]) - 1;
  const min = parseInt(timeArray[1]);

  if (min === 0) {  //  O'clock cases
    return convertOclock(hour);
  } else if (min <= 30) {  //  Past cases
    return convertPastTime(hour, min - 1);
  } else {  //  To cases
    return convertToTime(hour, min);
  }
}

module.exports = { convertTimeToWords };