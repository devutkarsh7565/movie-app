import Main from "./Main";

const App = () => {
  return (
    <>
      <div>
        <Main />
      </div>
    </>
  );
};

export default App;

// import { useState } from "react";
// import Home from "./components/home";
// import Next from "./components/Next";
// const App = () => {
//   const [change, setChange] = useState(false);
//   const changeOccur = () => {
//     setChange(true);
//   };
//   const changeOccurs = () => {
//     setChange(false);
//   };
//   return (
//     <>
//       <div className="w-screen h-screen flex justify-center items-center">
//         <div className="w-max-3xl flex flex-col ">
//           {change === true ? (
//             <Next changeOccurs={changeOccurs} />
//           ) : (
//             <Home changeOccur={changeOccur} />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
