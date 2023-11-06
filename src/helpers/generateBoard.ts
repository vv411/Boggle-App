export const generateBoard = (dimensions: number = 4) => {
    let boardArray: string[][] = [];
    const letters: string[] = [
        "A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X",
        "Y", "Z"
    ]

    const diceConfigs: string[] = [
        "AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS",
        "AOOTTW", "CIMOTU", "DEILRX", "DELRVY",
        "DISTTY", "EEGHNW", "EEINSU", "EHRTVW",
        "EIOSST", "ELRTTY", "HIMNQU", "HLNNRZ"
    ];

    for (let i = 0; i < dimensions; i++) {
        let rowArray: string[] = []
        for (let j = 0; j < dimensions; j++) {
            let randomLetter: number = getRandomInt(0, 26);
            rowArray.push(letters[randomLetter])
        }
        boardArray.push(rowArray);
    }

    return boardArray;
}
    

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}