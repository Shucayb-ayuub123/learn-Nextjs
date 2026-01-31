"use client";
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      
      {error.message}
      <button onClick={reset} className="bg-red-500">
        Try again
      </button>
    </div>
  );
};

export default Error;
