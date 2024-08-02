import React, { useCallback, useMemo, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import Result from "./Result";
import Sidebar from "./Sidebar";

const Game = () => {
  const chess = useMemo(() => new Chess('rnbq1bnr/ppp1Pkpp/5p2/8/8/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'), []);
  const [fen, setFen] = useState(chess.fen());
  const [over, setOver] = useState('');

  console.log({fen})

  const makeAMove = useCallback((move) => {
    try {
      const result = chess.move(move);
      setFen(chess.fen());

      if(chess.isGameOver())
      {
        if(chess.isCheckmate())
        {
          setOver(`checkmate! ${chess.turn() === "w" ? "Black" : "White"} win!`);
        } else if (chess.isDraw()) {
          setOver("Draw!");
        } else {
          setOver("Game Over!");
        }
      }

      return result;
    } catch(e) {
      console.log({error: e.message})
      return null;
      
    }
  }, [chess]);

  const onDrop = (sourceSquare, targetSquare) => {
    console.log({sourceSquare, targetSquare})

    // dữ liệu chess cần di chuyển
    // move
    const moveData = {
      from: sourceSquare,
      to: targetSquare,
      color: chess.turn()
    }

    // di chuyển
    // hàm kiểm tra di chuyển
    const move = makeAMove(moveData);

    // di chuyển không hợp lệ
    if(move === null) return false
    // còn lại là hợp lệ 
    return true
  }

  const handleContinue = () => {
    setOver("");
    chess.reset();
    setFen(chess.fen());
  }

  console.log({position: fen})

  return (
    <div className="w-full h-screen bg-neutral-800 flex justify-center items-center text-white">
      <Sidebar />
      <div className="w-full">
        <div className="w-1/2 max-w-6xl mx-auto">
          <Chessboard position={fen} onPieceDrop={onDrop} onPromotionPieceSelect={(object, from, to) => {
            if (object)
            makeAMove({from, to, color: chess.turn(), promotion: object[1].toLocaleLowerCase() })
          }} />
          <Result open={!!over} 
            children={over} 
            title={over} 
            contentText={over} 
            handleContinue={handleContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
