export const chain = process.env.REACT_APP_NODE_ENV === "DEV" ? "80002" : "137";

export const contractAddress =
  process.env.REACT_APP_NODE_ENV === "DEV"
    ? "0xAAdcdEC98CE6C560C6e4b1C2B1b31258D5C1AF9A"
    // : process.env.REACT_APP_CONTRACT_ADDRESS;
    : "0xD90a90bad7434572046C3197A31B11f70f59E248";

export const explorer =
  process.env.REACT_APP_NODE_ENV === "DEV"
    ? "https://amoy.polygonscan.com/"
    : "https://polygonscan.com";

export const network =
  process.env.REACT_APP_NODE_ENV === "DEV" ? "Amoy" : "Polygon";

// const DEV_CONFIG = {
//   chain: "80002",
//   contractAddress: "0xAAdcdEC98CE6C560C6e4b1C2B1b31258D5C1AF9A",
//   explorer: "https://amoy.polygonscan.com/",
//   network: "Amoy",
// };

// const PROD_CONFIG = {
//   chain: "137",
//   contractAddress: "0xCd5d3534544D8A7856e41CAfFca535113c61A4EB",
//   explorer: "https://polygonscan.com",
//   network: "Polygon",
// };

// export const config =
//   process.env.REACT_APP_NODE_ENV === "DEV" ? DEV_CONFIG : PROD_CONFIG;
