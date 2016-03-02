import _ from 'underscore'

export default {
  checkRow (row, board) {
    return board[row]
  },
  checkColumn (column, board) {
    let newColumn = _.map(board, (row) => row[column])
    return newColumn
  },
  checkBox (coordinate, board) {
    let row, column, maxRow, maxColumn
    [row, column] = coordinate

    row = Math.floor(row / 3) * 3
    column = Math.floor(column / 3) * 3
    maxColumn = column + 2
    maxRow = row + 2

    let boxArray = []
    for (let r = row; r <= maxRow ;r++) {
      for (let c = column; c <= maxColumn; c++) {
        boxArray.push(board[r][c])
      }
    }

    return boxArray
  },
  answerFits (answer, coordinate, board) {
    return !_.contains(this.checkRow(coordinate[0], board), answer) && !_.contains(this.checkColumn(coordinate[1], board), answer) && !_.contains(this.checkBox(coordinate, board), answer)
  }
}
