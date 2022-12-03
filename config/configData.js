const rows = ["B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N"];
const seats = [];
let count = 0;
const firstRow = [];
insideRows = [];
lastRow = [];
for (i = 1; i < 17; i++) {
  const seat = {
    type: "Single",
    code: "A" + i,
    price: 50000,
    id: count++,
  };
  seats.push(seat);
  firstRow.push(seat);
}

rows.forEach((row) => {
  let insideRow = [];
  for (i = 1; i < 19; i++) {
    const seat = {
      type: "Single",
      code: row + i,
      price: 80000,
      id: count++,
    };
    seats.push(seat);
    insideRow.push(seat);
  }

  insideRows.push(insideRow);
});
for (i = 1; i < 9; i++) {
  const seat = {
    type: "Couple",
    code: "O" + i,
    price: 150000,
    id: count++,
  };
  seats.push(seat);
  lastRow.push(seat);
}

const seatMap = {
  firstRow: firstRow,
  insideRows: insideRows,
  lastRow: lastRow,
};

module.exports = { seatMap, seats };