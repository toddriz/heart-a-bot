import _ from "lodash";

enum POSITION {
  "LEFT",
  "UP",
  "RIGHT",
  "DOWN",
}

type PassDirection = "LEFT" | "RIGHT" | "ACCROSS" | "HOLD";

type SUIT = "CLUB" | "DIAMOND" | "SPADE" | "HEART";

type VALUE =
  | "TWO"
  | "THREE"
  | "FOUR"
  | "FIVE"
  | "SIX"
  | "SEVEN"
  | "EIGHT"
  | "NINE"
  | "TEN"
  | "J"
  | "Q"
  | "K"
  | "A";

const standardDeck: Record<SUIT, VALUE[]> = {
  CLUB: [
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "J",
    "Q",
    "K",
    "A",
  ],
  DIAMOND: [
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "J",
    "Q",
    "K",
    "A",
  ],
  SPADE: [
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "J",
    "Q",
    "K",
    "A",
  ],
  HEART: [
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "J",
    "Q",
    "K",
    "A",
  ],
};

type cardo = Record<VALUE, SUIT>;

type Card = {
  suit: SUIT;
  value: VALUE;
};

type Player = {
  name: string;
  position: POSITION;
  hand: Card[];
  score: number;
};

class GameState {
  players: Player[];
  deck: Card[];
  playedCards: Card[];
  currentPlayerTurn: number;
  isOver: boolean;
  isHeartsBroken: boolean;
  passDirection: PassDirection;

  constructor(playerNames: string[]) {
    this.playedCards = [];
    this.currentPlayerTurn = -1;
    this.isOver = false;
    this.isHeartsBroken = false;
    this.passDirection = "LEFT";

    this.deck = _.reduce(
      standardDeck,
      (acc: Card[], values: VALUE[], key: string) => {
        values.forEach((value) => {
          acc.push({
            suit: key as SUIT,
            value,
          });
        });

        return acc;
      },
      []
    );

    const hands: Card[][] = _.chunk(_.shuffle(this.deck), 13);

    this.players = playerNames.map((playerName, index) => {
      return {
        name: playerName,
        position: index,
        hand: hands[index],
        score: 0,
      };
    });

    console.log(
      "JSON.stringify(this.players)",
      JSON.stringify(this.players, null, 2)
    );
  }

  simulatePass = () => {};
}

const main = (): void => {
  const game: GameState = new GameState(["Heber", "Craig", "Isaac", "Erin"]);
};

main();
