import Circle from "./components/Circle";
import { useState } from "react";
import illustration from "./assets/illustration-thank-you.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function App() {
  const [rating, setRating] = useState<number | null>(null);
  const [screen, setScreen] = useState<number>(0);

  const handleChangeScreen = () => {
    if (rating) {
      setScreen(1);
    } else {
      toast.info("You didn't select anything");
    }
  };

  return screen === 0 ? (
    <motion.main
      key="first"
      initial={{ scale: 0, rotate: 180 }}
      animate={{ rotate: 0, scale: 1 }}
      exit={{ scale: 0, rotate: 180 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="w-[clamp(30ch,_50%,_28em)] mx-auto bg-neutral-800 rounded-2xl px-4 py-6 sm:px-8 sm:min-h-[45dvh] flex justify-center flex-col"
    >
      <div>
        <Circle content="star" />
        <h1 className="text-neutral-100 text-3xl font-semibold mb-3">
          How did we do?
        </h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul
          aria-label="rating list"
          role="list"
          className="my-6 flex items-center justify-between"
        >
          <li>
            <Circle content={1} rating={rating} callback={setRating} />
          </li>
          <li>
            <Circle content={2} rating={rating} callback={setRating} />
          </li>
          <li>
            <Circle content={3} rating={rating} callback={setRating} />
          </li>
          <li>
            <Circle content={4} rating={rating} callback={setRating} />
          </li>
          <li>
            <Circle content={5} rating={rating} callback={setRating} />
          </li>
        </ul>
        <button
          className="w-full bg-primary-400 rounded-[100vmax] py-3 text-neutral-100 uppercase font-semibold active:scale-90 hover:bg-neutral-100 hover:text-primary-400 focus-visible:bg-neutral-100 focus-visible:text-primary-400 transition"
          onClick={handleChangeScreen}
        >
          Submit
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </motion.main>
  ) : (
    <motion.main
      key="second"
      initial={{ scale: 0, rotate: 180 }}
      animate={{ rotate: 0, scale: 1 }}
      exit={{ scale: 0, rotate: 180 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="w-[clamp(30ch,_50%,_28em)] mx-auto bg-neutral-800 rounded-2xl px-4 py-6 sm:px-8 sm:min-h-[45dvh] flex justify-center flex-col"
    >
      <div>
        <img
          src={illustration}
          alt="illustration of a rating system"
          className="w-[12em] mb-3 mx-auto"
        />
        <h1 className="rounded-full backdrop-blur bg-white/5 text-primary-400 w-max mx-auto py-1 px-3 font-normal my-4">
          You selected {rating} out of 5
        </h1>
        <h2 className="text-neutral-100 text-3xl font-semibold mb-3 text-center">
          Thank you!
        </h2>
        <p className="text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </motion.main>
  );
}

export default App;
