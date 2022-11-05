import { useState } from "react";

const useDisplayToggle = () => {
  const [toToggle, setToToggle] = useState(false);
  const [displayToggled, setDisplayToggled] = useState(false);

  const handleToToggle = () => setToToggle(true);

  const handleToggleOnLeave = () => {
    if (!toToggle) return;
    setDisplayToggled((prev) => !prev);
    setToToggle(false);
  };

  return { toToggle, displayToggled, handleToToggle, handleToggleOnLeave };
};

export default useDisplayToggle;
