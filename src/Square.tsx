import React, { useRef } from "react";
import { useCountRenders } from "./useCountRenders";

function Hello({ increment, n }: { n: any; increment: any }) {
  useCountRenders();
  return <button onClick={increment}> {n} </button>;
}

export default Hello;
