

class View {


  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('.square').on('click', e => {
      const $sq = $(e.currentTarget);
      this.makeMove($sq);
    });
  }

  makeMove($square) {
    let pos = $square.attr("data-pos").split(",").map(el => parseInt(el));
    //
    try {
      this.game.playMove(pos);
      $square.addClass(this.game.currentPlayer);
    } catch (e) {
      alert("Invalid move! Try again!");
      return;
    }
    if (this.game.isOver() === true) {
      this.$el.append($("<div>").addClass(".win").text("Congratulation! You Won!"));
    }

  }

  setupBoard() {
    for (let i = 0; i < 3; i++) {
      this.addRow();
    }
  }

}

View.prototype.addRow = function () {
  const rowIdx = this.$el.find(".row").length;
  const $row = $("<ul>").addClass("row").addClass("group");
  for(let colIdx = 0; colIdx<3; colIdx++) {
    const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);

    $row.append($square);
  }
  this.$el.append($row);
};


module.exports = View;
