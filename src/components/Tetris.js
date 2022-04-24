import React, { useState } from "react";
import Display from "./Display";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import Stage from "./Stage";
import StartButton from "./StartButton";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { createStage } from "../gameHelpers";

const Tetris = () => {
  const [droptime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);




    console.log('re-render');

    const movePlayer = dir => {

    }

    const startGame = () => {

    }

    const drop = () => {

    }

    const dropPlayer = () => {
      drop();

    }

    const move = ({ keyCode }) => {
      if(!gameOver) {
        if(keyCode === 37) {
          movePlayer(-1);

        } else if (keyCode === 39) {
          movePlayer(1)
        } else if (keyCode === 40)  {
          dropPlayer();
        }
      }

    }
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        {/* sidebar */}
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          )}

          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
