const getAgeList = (min: number, max: number) => {
  const list: string[] = [];
  for (let i = min; i < max; i++) {
    list.push(i.toString());
  }

  return list;
};

export default getAgeList;
