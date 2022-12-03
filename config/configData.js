const genres = [
  { name: "Hành động", id: 0 },
  { name: "Tình cảm", id: 1 },
  { name: "Hài", id: 2 },
  { name: "Kinh dị", id: 3 },
  { name: "Khoa học viễn tưởng", id: 4 },
  { name: "Hoạt hình", id: 5 },
  { name: "Tâm Lý", id: 6 },
  { name: "Tội phạm", id: 7 },
  { name: "Phim tài liệu", id: 8 },
  { name: "Phiêu Lưu", id: 9 },
  { name: "Thần thoại", id: 10 },
];

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

module.exports = { seatMap, seats, genres };
