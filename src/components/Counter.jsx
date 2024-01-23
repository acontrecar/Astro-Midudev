import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div class="text-yellow-300 text-2xl">
      <p>Count: {count}</p>
      <button
        class="border x-4 text-2xl"
        onClick={() => setCount((count) => count + 1)}
      >
        +1
      </button>
      <button
        class="border x-4 text-2xl"
        onClick={() => setCount((count) => count - 1)}
      >
        -1
      </button>
    </div>
  );
}
