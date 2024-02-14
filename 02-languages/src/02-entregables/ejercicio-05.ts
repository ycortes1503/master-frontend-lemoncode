console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  private coinCounter = 0;

  private incrementCoins() {
    this.coinCounter++;
  }

  private resetMachine() {
    this.coinCounter = 0;
  }

  private getRandomBoolean() {
    return Math.random() >= 0.5;
  }

  play() {
    this.incrementCoins();

    const statusRoulette1 = this.getRandomBoolean();
    const statusRoulette2 = this.getRandomBoolean();
    const statusRoulette3 = this.getRandomBoolean();

    const hasWon = statusRoulette1 && statusRoulette2 && statusRoulette3;

    const hasWonMsg = `Congratulations!!!. You won ${this.coinCounter} coins!!`;
    const hasNotWonMsg = "Good luck next time!!";
    let msgToShow = hasWon ? hasWonMsg : hasNotWonMsg;

    if (hasWon) {
      this.resetMachine();
    }

    console.log(msgToShow);
  }
}
