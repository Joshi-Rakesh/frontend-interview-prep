import { Button } from "antd";
import { useEffect, useRef, useState } from "react";

const InfiniteTimer = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const directionRef = useRef(1);

  const startStopHandler = () => {
    setStart((prevStartStop) => !prevStartStop);
  };

  const resetHandler = () => {
    setStart(false);
    setCount(0);
  };

  useEffect(() => {
    if (!start) {
      return;
    }
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 5) directionRef.current = -1;
        if (prev === 0) directionRef.current = 1;

        return prev + directionRef.current;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [start]);

  return (
    <div className="flex items-center gap-2">
      <Button onClick={startStopHandler}>Start / Stop</Button>
      <div>{count}</div>
      <Button onClick={resetHandler}>Reset</Button>
    </div>
  );
};

export default InfiniteTimer;
