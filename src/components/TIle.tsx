import { FC } from "react";

type TileProps = {
    letter: string
    selected? : boolean
    onClick? : (...args: any[]) => any;
  }
  
//const Tile = (letter: string) => {
const Tile: FC<TileProps> = (props): JSX.Element => {
    return (
        <>
            <button onClick={props.onClick} className="h-32 w-32 flex justify-center items-center border border-1 border-gray-900 text-8xl bg-neutral-100">
                {props.letter}
            </button>
        </>
    )
}

export default Tile;