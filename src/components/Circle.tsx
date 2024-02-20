import star from "../assets/icon-star.svg";

type CircleProps = {
  content: number | "star";
  rating?: number | null;
  callback?: (num: number) => void;
};

export default function Circle({ content, rating, callback }: CircleProps) {
  return typeof content === "number" ? (
    <button
      className={`rounded-full backdrop-blur w-12 aspect-square flex justify-center items-center shadow-2xl hover:bg-neutral-200 hover:text-neutral-100 focus-visible:bg-neutral-200 focus-visible:text-neutral-100 transition ${
        rating === content
          ? "bg-primary-400 text-neutral-100 hover:bg-primary-400 hover:text-neutral-100 focus-visible:bg-primary-400 focus-visible:text-neutral-100"
          : "bg-white/5"
      }`}
      onClick={() => {
        if (callback) {
          callback(content);
        }
      }}
    >
      {content}
    </button>
  ) : (
    <div className="rounded-full backdrop-blur bg-white/5 w-12 aspect-square flex justify-center items-center shadow-2xl mb-4">
      <img src={star} alt="gold star icon" />
    </div>
  );
}
