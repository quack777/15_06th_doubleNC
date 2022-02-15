const moneyAddComma = (money: string) => {
  const addedCommaMoney = money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return addedCommaMoney;
};

export default moneyAddComma;
