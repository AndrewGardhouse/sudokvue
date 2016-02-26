export default {
  checkRow (row, board) {
    return board[row]
  },
  checkColumn (column, board) {
    let newColumn = board.map((row) => row[column])
    return newColumn
  },
  checkBox (coordinate, board) {
    let row, column
    [row, column] = coordinate

    row = Math.floor(row / 3) * 3
    column = Math.floor(column / 3) * 3
    const maxColumn = column + 2
    const maxRow = row + 2

    let boxArray = []
    for (let r = row; r <= maxRow ;r++) {
      for (let c = column; c <= maxColumn; c++) {
        boxArray.push(board[r][c])
      }
    }

    return boxArray
  },
  answerFits (answer, coordinate, board) {
    return !this.checkRow(coordinate[0], board).includes(answer) && !this.checkColumn(coordinate[1], board).includes(answer) && !this.checkBox(coordinate, board).includes(answer)
  }
}
