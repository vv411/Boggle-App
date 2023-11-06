import { useState, useEffect } from "react";
import { generateBoard } from "../helpers/generateBoard";
import Tile from "./TIle";

type boardMatrix = string[][];

const Board = () => {
    const [board, setBoard] = useState<boardMatrix>([]);
    const [selectedTiles, setSelectedTiles] = useState([]);
    const [word, currentWord] = useState("");

    useEffect(() => {
        let newBoard: string[][] = generateBoard(4);
        setBoard(newBoard);
    }, [])

    const handleSelect = (rowIndex: number, colIndex: number) => {
        console.log(board[rowIndex][colIndex]);
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center bg-neutral-200">
                {
                    board?.map((row, index) => {
                        return (
                            <div key={index}>
                                {row.map((tile, tileIndex) => {
                                    return <Tile key={tileIndex} letter={tile} onClick={() => handleSelect(index, tileIndex)} />;
                                })}
                            </div>
                        ) 
                    })
                }
            </div>
        </>
    )
}

export default Board;