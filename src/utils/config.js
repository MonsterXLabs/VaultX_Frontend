export const chain = process.env.REACT_APP_NODE_ENV === "DEV" ? "80001" : "137"

export const contractAddress = process.env.REACT_APP_NODE_ENV === "DEV" ? "0xAAdcdEC98CE6C560C6e4b1C2B1b31258D5C1AF9A" : "0x83488B4f3e619e89052193562F70620a2D66B773"

export const explorer = process.env.REACT_APP_NODE_ENV === "DEV" ? "https://mumbai.polygonscan.com/" : "https://polygonscan.com"

export const network = process.env.REACT_APP_NODE_ENV === "DEV" ? "Mumbai" : "Polygon"
