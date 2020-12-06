import shuffle from "./shuffle";

const generateArr = function(kol=5) {
  let one, two;
  let arrG = [],
    priG = {},
    znak = "+";
  for (let i = 0; i < kol * 30; i++) {
    one = rnd(11);
    two = one != 10 ? rnd(10 - one) : 0;
    priG = {
      first: one,
      second: two,
      znak: znak,
      result: -1,
      validity: znak == "+" ? one + two : one - two,
    };
    arrG.push(priG);
  }
  let r = arrG.filter((item) => item.first != 0 && item.second != 0);
  let r0 = arrG
    .filter((item) => item.first == 0 || item.second == 0)
    .slice(1, 2);
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


const result = function(arr){
  let amount = arr.length;
  let success = arr.filter(item=>item.result==item.validity).length
  let fail = arr.filter(item=>item.result!=item.validity).length
  return {
    amount,
    success,
    fail
  }
}

export {generateArr, result} ;
