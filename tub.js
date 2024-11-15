function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findPrimePairs(target) {
    const pairs = [];
    for (let i = 2; i <= Math.sqrt(target); i++) {
      if (target % i === 0) {
        const other = target / i;
        // Ikki tub sonni tekshirish
        if (isPrime(i) && isPrime(other) && i !== other) {
          pairs.push([i, other]);
        }
      }
    }
    return pairs;
  }
  
  const target = 163201;
  const primePairs = findPrimePairs(target);
  
//   if (primePairs.length > 0) {
//     console.log("Ikkita tub sonning ko'paytmasi 46621 ga teng bo'lgan juftliklar:");
//     primePairs.forEach(pair => console.log(`${pair[0]} va ${pair[1]}`));
//   } else {
//     console.log("Bunday tub sonlar juftligi mavjud emas.");
//   }



// function func(num) {
//     return Number((Math.pow(num,23))%26)
// }
// console.log(func(20));




function findRemainder(a, b) {
    while (a >= b) {
      a -= b;
    }
    return a;
  }
  
  let a = 17;
  let b = 5;
  let qoldiq = findRemainder(a, b);
  console.log(qoldiq);  // Natija: 2
  


  console.log("salom");
  
  