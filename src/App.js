import { useState } from "react";
import Board from "./Board.js";
import "./styles.css";

const winningCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialCells = Array(9).fill("");

function getWinningLine(cells) {
  return winningCases.find(([first, second, third]) => {
    return cells[first] && cells[first] === cells[second] && cells[first] === cells[third];
  });
}

function GamePreview() {
  const [cells, setCells] = useState(initialCells);
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const winningLine = getWinningLine(cells);
  const winner = winningLine ? cells[winningLine[0]] : null;
  const isDraw = !winner && cells.every(Boolean);
  const isGameEnded = Boolean(winner || isDraw);

  const onCellClicked = (cellIndex) => {
    if (isGameEnded || cells[cellIndex]) {
      return;
    }

    setCells((currentCells) =>
      currentCells.map((cell, index) => (index === cellIndex ? currentPlayer : cell))
    );
    setCurrentPlayer((player) => (player === "x" ? "o" : "x"));
  };

  const resetGame = () => {
    setCells(initialCells);
    setCurrentPlayer("x");
  };

  let gameMessage = `Player ${currentPlayer === "x" ? "X" : "O"}'s turn`;
  if (winner) {
    gameMessage = `Player ${winner.toUpperCase()} wins!`;
  } else if (isDraw) {
    gameMessage = "It's a draw!";
  }

  return (
    <div className="game-card" id="play">
      <div className="game-card__topline">
        <span className="game-card__label">A LITTLE SOMETHING TO PLAY</span>
        <span className="game-card__live">
          <span aria-hidden="true" />
          LIVE DEMO
        </span>
      </div>
      <div className="game-card__heading">
        <div>
          <p className="eyebrow">FEATURED PROJECT · 01</p>
          <h2>Tic-Tac-Toe</h2>
        </div>
        <span className="game-card__spark" aria-hidden="true">✳</span>
      </div>
      <div className="game-card__game">
        <div className="game-card__status">
          <span className={`player-chip player-chip--${winner || currentPlayer}`}>
            {winner ? winner.toUpperCase() : currentPlayer.toUpperCase()}
          </span>
          <span aria-live="polite" aria-atomic="true">{gameMessage}</span>
        </div>
        <Board
          cells={cells}
          winningLine={winningLine || []}
          onCellClicked={onCellClicked}
          isGameEnded={isGameEnded}
        />
        <button className="reset-button" type="button" onClick={resetGame}>
          <span aria-hidden="true">↻</span>
          {isGameEnded ? "Play again" : "Start over"}
        </button>
      </div>
      <div className="game-card__footer">
        <span>Built with React</span>
        <span className="game-card__footer-dot" aria-hidden="true">✳</span>
        <span>Made to play</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Chandu, home">
          <span className="wordmark__mark">C<span>.</span></span>
          <span className="wordmark__name">CHANDU</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#work">PROJECT</a>
          <a href="#toolkit">TOOLKIT</a>
        </nav>
        <a className="header-link" href="#play">
          PLAY THE GAME <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              <span className="hero__eyebrow-line" />
              A PERSONAL PORTFOLIO
            </p>
            <h1>
              Hi, I’m Chandu.
              <br />
              I make the web
              <br />
              <span className="hero__accent">a little more</span>
              <br />
              <span className="hero__italic">playful.</span>
            </h1>
            <p className="hero__intro">
              A small collection of what I’m building, what I’m learning, and the ideas
              I bring to life on the web.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                EXPLORE MY WORK <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#about">A LITTLE ABOUT ME <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero__note">
              <span className="hero__note-star" aria-hidden="true">✳</span>
              <span>Thoughtfully made, one project at a time.</span>
            </div>
          </div>

          <div className="hero__visual" aria-label="Featured project preview">
            <div className="visual-orbit visual-orbit--one" />
            <div className="visual-orbit visual-orbit--two" />
            <span className="visual-caption visual-caption--top">A QUICK GAME?</span>
            <span className="visual-caption visual-caption--bottom">TAKE YOUR PICK ↗</span>
            <GamePreview />
            <span className="hero__visual-star" aria-hidden="true">✳</span>
          </div>
          <span className="hero__side-note" aria-hidden="true">DESIGN · CODE · PLAY</span>
        </section>

        <div className="ticker" aria-label="React, JavaScript, CSS, HTML">
          <div className="ticker__track">
            {[0, 1].map((repeat) => (
              <div className="ticker__group" key={repeat} aria-hidden={repeat ? "true" : undefined}>
                <span>MADE FOR THE WEB</span><i>✳</i><span>BUILT WITH CURIOSITY</span><i>✳</i>
                <span>REACT</span><i>✳</i><span>JAVASCRIPT</span><i>✳</i><span>GOOD IDEAS, IN PROGRESS</span><i>✳</i>
              </div>
            ))}
          </div>
        </div>

        <section className="about section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow"><span className="section-number">01</span> THE PERSON BEHIND THE PIXELS</p>
            <span className="section-heading__decoration" aria-hidden="true">✳</span>
          </div>
          <div className="about__content">
            <h2>A little about <span>me.</span></h2>
            <div className="about__copy">
              <p>
                I’m Chandu. I enjoy making interactive things for the web and exploring
                how a few lines of code can turn into something people can use and enjoy.
              </p>
              <p>
                This portfolio is a snapshot of that process. The featured project is a
                classic Tic-Tac-Toe game, built with React and styled with CSS.
              </p>
              <a className="text-link text-link--dark" href="#toolkit">
                WHAT I’M BUILDING WITH <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap work">
            <div className="section-heading">
              <p className="eyebrow"><span className="section-number">02</span> A PROJECT IN PLAY</p>
              <span className="work__count">01 / 01</span>
            </div>
            <div className="work__intro">
              <h2>Small project.<br /><span>Big rematch energy.</span></h2>
              <p>
                A familiar game, brought to the browser. Pick a square, take turns, and
                see who gets three in a row.
              </p>
            </div>
            <div className="project-card">
              <div className="project-card__number">PROJECT<br />NO. 001</div>
              <div className="project-card__body">
                <p className="eyebrow">INTERACTIVE WEB APP</p>
                <h3>Tic-Tac-Toe</h3>
                <p>
                  A two-player classic featuring turn-by-turn play, win detection, and a
                  fresh start whenever you’re ready for a rematch.
                </p>
                <div className="tag-list" aria-label="Technologies used">
                  <span>REACT</span><span>JAVASCRIPT</span><span>CSS</span>
                </div>
              </div>
              <a className="project-card__link" href="#play" aria-label="Play the Tic-Tac-Toe game">
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="toolkit section-wrap" id="toolkit">
          <div className="section-heading">
            <p className="eyebrow"><span className="section-number">03</span> THE TOOLKIT</p>
            <span className="toolkit__aside">THE TOOLS BEHIND THIS PAGE</span>
          </div>
          <div className="toolkit__content">
            <h2>My current<br />building blocks<span>.</span></h2>
            <div className="tool-grid">
              <div className="tool-item"><span className="tool-item__index">01</span><span>HTML</span><span className="tool-item__arrow">↗</span></div>
              <div className="tool-item"><span className="tool-item__index">02</span><span>CSS</span><span className="tool-item__arrow">↗</span></div>
              <div className="tool-item"><span className="tool-item__index">03</span><span>JavaScript</span><span className="tool-item__arrow">↗</span></div>
              <div className="tool-item"><span className="tool-item__index">04</span><span>React</span><span className="tool-item__arrow">↗</span></div>
            </div>
          </div>
          <p className="toolkit__footnote">A practical toolkit, growing with every project.</p>
        </section>

        <section className="closing">
          <div className="closing__inner section-wrap">
            <span className="closing__star" aria-hidden="true">✳</span>
            <p className="eyebrow">THANKS FOR STOPPING BY</p>
            <h2>More to come.<br /><span>Stay curious.</span></h2>
            <a className="button button--light" href="#home">BACK TO THE TOP <span aria-hidden="true">↑</span></a>
            <span className="closing__scribble" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home">
          <span className="wordmark__mark">C<span>.</span></span>
          <span className="wordmark__name">CHANDU</span>
        </a>
        <span>DESIGNED & BUILT WITH CARE</span>
        <a href="#home">BACK TO TOP ↑</a>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;
