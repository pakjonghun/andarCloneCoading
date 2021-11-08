export const priceCaculator = items => {
  if (!items || !items.length) return;

  const getData = (pre, cur) => ({
    originPrice: (pre.originPrice += cur.price * cur.count),
    discountPrice: (pre.discountPrice += cur['salePrice'] * cur.count),
  });

  const caculated = items.reduce(getData, { originPrice: 0, discountPrice: 0 });
  return caculated;
};

export const priceChanger = x => {
  if (!x) return 0;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const keyNameChanger = (key, newKey, obj) => {
  const temp = obj[key];
  delete obj[key];
  obj[newKey] = temp;
};

export const deleteKey = (key, obj) => {
  delete obj[key];
};

export const addKey = (key, value, obj) => {
  obj[key] = value;
};
