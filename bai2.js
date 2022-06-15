const arrayClub = [
  {
    name: "Arsenal",
    points: 99,
    GD: 45,
  },
  {
    name: "Chelsea",
    points: 75,
    GD: 39,
  },
  {
    name: "Manchester United",
    points: 60,
    GD: 29,
  },
  {
    name: "Liverpool",
    points: 88,
    GD: 39,
  },
];

var result = arrayClub.map(function (item, index) {
  var o = Object.assign({}, item);
  o.position = index + 1;
  const pointsArray = arrayClub.sort((a, b) => {
    return b.points - a.points;
  });

  const ls = arrayClub.filter((item, index) => {
    var list = arrayClub.indexOf(item) === index;
    return list;
  });

  return o;
});
console.log(result);
