export const personalSize = {
  id: "a6969ea5-5ed3-4471-ae2e-c39c4c5b9ecb",
  name: "Personal",
  size: 10,
  price: 5,
  toppingMultiplier: 0.8,
};

export const smallSize = {
  id: "d776f444-827b-44af-b2c6-ca98141f383b",
  name: "Small",
  size: 12,
  price: 6,
  toppingMultiplier: 1,
};

export const mediumSize = {
  id: "c4984c2b-b743-4d09-97a8-63350adee207",
  name: "Medium",
  size: 14,
  price: 7,
  toppingMultiplier: 1.2,
};

export const largeSize = {
  id: "ba01f6b5-a08f-4c47-8e65-c43a5f7fd64b",
  name: "Large",
  size: 16,
  price: 8,
  toppingMultiplier: 1.4,
};

export default [personalSize, smallSize, mediumSize, largeSize].sort((a, b) => a.size - b.size);
