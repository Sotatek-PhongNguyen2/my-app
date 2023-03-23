import React, { useRef } from "react";
import { useCountRenders } from "./useCountRenders";

function Hello({ increment }: { increment: any }) {
//   useCountRenders();
  return <button onClick={increment}>hello</button>;
}

export default React.memo(Hello);
