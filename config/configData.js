const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N"];
const seats = [];
let count = 0;
const singleSeats = [];
const sweetbox = [];
rows.forEach((row, index) => {
  let rowNumber;
  if (index < 10) {
    rowNumber = 11;
  } else {
    rowNumber = 15;
  }
  let insideRow = [];
  for (i = 1; i < rowNumber; i++) {
    const seat = {
      type: "Single",
      code: row + i,
      price: 80000,
      id: count++,
    };
    seats.push(seat);
    insideRow.push(seat);
  }
  singleSeats.push(insideRow);
});

for (i = 1; i < 8; i++) {
  const seat = {
    type: "Couple",
    code: "O" + i,
    price: 200000,
    id: count++,
  };
  seats.push(seat);
  sweetbox.push(seat);
}

const seatMap = {
  singleSeats: singleSeats,
  sweetbox: sweetbox,
};

module.exports = { seatMap, seats };
