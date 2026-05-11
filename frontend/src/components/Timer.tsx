import { useEffect, useState } from "react";

interface TimerProps {

  onFinish: (duration: number) => void;
}

export function Timer({
  onFinish,
}: TimerProps) {

  const [seconds, setSeconds] =
    useState(0);

  const [isRunning, setIsRunning] =
    useState(false);

  useEffect(() => {

    let interval: number;

    if (isRunning) {

      interval = setInterval(() => {

        setSeconds((prev) => prev + 1);

      }, 1000);
    }

    return () => clearInterval(interval);

  }, [isRunning]);

  function handleStart() {

    setIsRunning(true);
  }

  function handlePause() {

    setIsRunning(false);
  }

  function handleReset() {

    setSeconds(0);

    setIsRunning(false);
  }

  function handleFinish() {

    setIsRunning(false);

    const minutes =
      Math.floor(seconds / 60);

    onFinish(minutes);

    setSeconds(0);
  }

  const minutes =
    Math.floor(seconds / 60);

  const remainingSeconds =
    seconds % 60;

  return (

    <div
      className="
        bg-zinc-900
        p-6
        rounded-2xl
        flex
        flex-col
        items-center
        gap-6
      "
    >

      <h2
        className="
          text-white
          text-3xl
          font-bold
        "
      >

        Timer de Estudo

      </h2>

      <div
        className="
          text-6xl
          text-green-400
          font-bold
        "
      >

        {String(minutes).padStart(2, "0")}
        :
        {String(remainingSeconds).padStart(2, "0")}

      </div>

      <div
        className="
          flex
          gap-4
        "
      >

        <button
          onClick={handleStart}

          className="
            bg-green-600
            hover:bg-green-700
            px-4
            py-2
            rounded-lg
            text-white
          "
        >

          Start

        </button>

        <button
          onClick={handlePause}

          className="
            bg-yellow-600
            hover:bg-yellow-700
            px-4
            py-2
            rounded-lg
            text-white
          "
        >

          Pause

        </button>

        <button
          onClick={handleReset}

          className="
            bg-red-600
            hover:bg-red-700
            px-4
            py-2
            rounded-lg
            text-white
          "
        >

          Reset

        </button>

      </div>

      <button
        onClick={handleFinish}

        className="
          bg-blue-600
          hover:bg-blue-700
          px-6
          py-3
          rounded-lg
          text-white
          w-full
        "
      >

        Finalizar Treino

      </button>

    </div>
  );
}