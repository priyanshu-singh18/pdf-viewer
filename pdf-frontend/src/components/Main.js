import React, { useState } from "react";

import EditComponent from "./EditComponent";

export default function Main() {
  const [load, setLoad] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setLoad(!load);
        }}
      >
        load
      </button>
      {load && <EditComponent />}
    </div>
  );
}
