const hqLocation = 42;

function distanceFromHqInBlocks(block) {
  if (block > hqLocation) {
    return block - hqLocation;
  }
  return hqLocation - block;
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(block) {
  const result = distanceFromHqInBlocks(block) * 264;
  return result;
}

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  }
  return (destination - start) * 264;
}
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));
console.log(distanceTravelledInFeet(43, 48));

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return ((distance - 400) * 2) / 100;
  } else if (distance > 2000 && distance < 2500) {
    return 2500 / 100;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}

console.log(calculatesFarePrice(43, 44)); //0
console.log(calculatesFarePrice(34, 32)); //2.56
console.log(calculatesFarePrice(50, 58)); //25
console.log(calculatesFarePrice(34, 24)); //cannot travel that far
