function editArray(oldArr, newArr) {
  if (oldArr.length >= newArr.length) {
    const newArray = oldArr.map((obj) => {
      const newInfo = newArr.find((item) => item.name === obj.name);
      if (!newInfo) {
        return { ...obj, active: false };
      }
      if (newInfo) {
        return { ...obj, active: true };
      }
      return obj;
    });
    return newArray;
  }
  if (oldArr.length < newArr.length) {
    const newArray = newArr.map((obj) => {
      const newInfo2 = oldArr.find((item) => item.name === obj.name);
      if (newInfo2) return { ...obj, active: true };
      return obj;
    });
    return newArray;
  }
}
module.exports = editArray;
