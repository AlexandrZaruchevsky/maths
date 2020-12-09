import shuffle from "./shuffle";

const generateArr = function(kol = 5, limit = 10) {
  let arrG = [
    ...genArray(kol * 30, limit, "+"),
    ...genArray(kol * 30, limit, "-"),
  ];
  let r = arrG.filter((item) => item.first != 0 && item.second != 0);
  let arr0 = arrG.filter((item) => item.first == 0 || item.second == 0);
  let r0 = [...shuffle(arr0)].slice(1, 2);
  arrG = [...shuffle([...shuffle([...r]).slice(1, kol + 1), ...r0])];
  let arr = [];
  for (let i = 0; i < arrG.length; i++) {
    arr.push({
      idx: i,
      ...arrG[i],
    });
  }
  return arr;
};

const rnd = function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const result = function(arr) {
  let amount = arr.length;
  let success = arr.filter((item) => item.result == item.validity).length;
  let fail = arr.filter((item) => item.result != item.validity).length;
  return {
    amount,
    success,
    fail,
  };
};

const genArray = function(amount = 5, limit = 10, znakIn = "+") {
  let one, two;
  let arrG = [],
    priG = {};
  for (let i = 0; i < amount; i++) {
    if (znakIn == "+") {
      one = rnd(limit + 1);
      two = one != limit ? rnd(limit - one) : 0;
    } else if (znakIn == "-") {
      one = rnd(limit) + 1;
      two = rnd(one + 1);
    }
    priG = {
      first: one,
      second: two,
      znak: znakIn,
      result: -1,
      validity: znakIn == "+" ? one + two : one - two,
    };
    arrG.push(priG);
  }
  return arrG;
};

const genArraMultiply = function(amount = 5) {
  let arrTemp = [];
  for (let i = 0; i < amount + 300; i++) {
    let one = rnd(10);
    let two = rnd(10);
    let znakIn = "x";
    let priG = {
      first: one,
      second: two,
      znak: znakIn,
      result: -1,
      validity: znakIn == "x" ? one * two : one / two,
    };
    arrTemp.push(priG);
  }
  arrTemp = [...shuffle([...arrTemp])].slice(0, amount);
  let arr = [];
  for (let i = 0; i < arrTemp.length; i++) {
    arr.push({
      idx: i,
      ...arrTemp[i],
    });
  }
  return arr;
};

export { generateArr, genArraMultiply, result };
