function getTimeList() {
  const timeList: string[] = [];

  // for (let hour = 0; hour <= 12; hour++) {
  //   for (let minute = 0; minute <= 45; minute += 15) {
  //     const time = '오전 ' + padTime(hour) + ':' + padTime(minute);
  //     timeList.push(time);
  //   }
  // }

  for (let hour = 12; hour <= 23; hour++) {
    for (let minute = 0; minute <= 45; minute += 15) {
      const time = '오후 ' + padTime(hour) + ':' + padTime(minute);
      timeList.push(time);
    }
  }

  return timeList;
}

function padTime(value: number) {
  return value.toString().padStart(2, '0');
}

export default getTimeList;
