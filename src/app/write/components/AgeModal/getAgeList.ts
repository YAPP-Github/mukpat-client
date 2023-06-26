const getAgeList = (min: number, max: number) => {
  const list = [''];
  for (let i = min; i < max; i++) {
    list.push(`${i.toString()}세`);
  }

  return list;
};

export default getAgeList;
