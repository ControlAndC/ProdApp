
import { logToServer, hello } from "./logger";
// eslint-disable-next-line import/prefer-default-export
export const sum = (p1, p2) => {
  logToServer(p1 + p2);
  hello();
  return p1 + p2;
};


