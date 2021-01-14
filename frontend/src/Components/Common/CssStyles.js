import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  textBold: {
    fontWeight: "bold",
  },
  splash: {
    animation: "$waitingAnimation 0.7s linear infinite alternate",
    width: "20px",
    height: "20px",
    border: "1px solid #007bff",
  },
  "@keyframes waitingAnimation": {
    "0%": {
      transform: "scale(1.3) rotate(360deg)",
      borderRadius: "0px",
    },
    "100%": {
      transform: "scale(1) rotate(0deg)",
      borderRadius: "10px",
    },
  },
}));
