import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-hidden items-center">
      <h1 className=" absolute bg-white rounded-lg w-11/12 text-center  mt-[30px]  px-10 py-2 text-4xl font-bold mx-auto">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-50  mt-[100px]">
       <Random/>
        <Tag />
      </div>
    </div>
  );
}
