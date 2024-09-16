import { useEffect, useRef, useState } from "react";

type CategoryProps = {
  categories: string[];
};

const TRANSLATE_AMOUNT = 60;

function Category({ categories }: CategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [translateAmount, setTranslateAmount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    setShowLeftButton(translateAmount < 0);
    setShowRightButton(
      containerRef.current?.clientWidth + Math.abs(translateAmount) <=
        containerRef.current?.scrollWidth,
    );
  }, [translateAmount]);

  return (
    <div className="relative overflow-hidden px-6 py-2">
      {showLeftButton && (
        <button
          onClick={() =>
            setTranslateAmount((prevState) => prevState + TRANSLATE_AMOUNT)
          }
          className="absolute left-0 z-10 translate-x-1/3 rounded-full bg-white p-1 hover:bg-neutral-400"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      <div
        ref={containerRef}
        className="flex flex-row gap-2 transition"
        style={{ transform: `translateX(${translateAmount}px)` }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap rounded-lg px-2 py-1 ${selectedCategory === category ? "bg-neutral-900 text-white hover:bg-neutral-950" : "bg-neutral-100 hover:bg-neutral-200"}`}
          >
            {category}
          </button>
        ))}
      </div>
      {showRightButton && (
        <button
          onClick={() =>
            setTranslateAmount((prevState) => prevState - TRANSLATE_AMOUNT)
          }
          className="absolute right-0 -translate-x-1/2 -translate-y-full rounded-full bg-white p-1 hover:bg-neutral-400"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Category;
