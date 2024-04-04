"use client";

import { useScroll } from "@use-gesture/react";
import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [direction, setDirection] = useState<number>(0);
  const scroll =
    typeof window !== "undefined"
      ? useScroll(
          (state) => {
            const [x, y] = state.direction;
            const [offx, offy] = state.offset;
            if (offy > 40) {
              setDirection(y);
            }
          },
          { target: window }
        )
      : undefined;

  useEffect(() => {
    scroll;
  }, [direction]);

  return direction;
};

export default useScrollDirection;
