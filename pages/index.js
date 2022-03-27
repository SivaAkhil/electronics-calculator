import { useForm } from "react-hook-form";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function calculateTime(psc, arr, fclk) {
  return ((psc + 1) * (arr + 1)) / fclk;
}

function calculatePsc(time, fclk, arr) {
  return (time * fclk) / (arr + 1) - 1;
}

function calculateArr(time, fclk, psc) {
  return (time * fclk) / (psc + 1) - 1;
}

function calculateFclk(psc, arr, time) {
  return ((psc + 1) * (arr + 1)) / time;
}

const MinLength = (props) => {
  return <p>Min is {props.data}</p>;
};

const MaxLength = (props) => {
  return <p>Max is {props.data}</p>;
};

export default function Home() {
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      psc: 0,
      arr: 0,
      fclk: 0,
      time: 0,
      mode: 16,
    },
    mode: "onChange",
  });

  const pscLive = watch("psc");
  const arrLive = watch("arr");
  const timeLive = watch("time");
  const fclkLive = watch("fclk");
  const modeLive = watch("mode", "16");

  const pscCalculated = calculatePsc(
    Number(timeLive),
    Number(fclkLive),
    Number(arrLive)
  );
  const arrCalculated = calculateArr(
    Number(timeLive),
    Number(fclkLive),
    Number(pscLive)
  );
  const timeCalculated = calculateTime(
    Number(pscLive),
    Number(arrLive),
    Number(fclkLive)
  );
  const fclkCalculated = calculateFclk(
    Number(pscLive),
    Number(arrLive),
    Number(timeLive)
  );

  const maxArr = modeLive === "32" ? 4294967296 : 65536;

  console.log(maxArr);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center pt-10 font-bold">
      <table className="border-2 p-3">
        <tr className="border-2">
          <th className="w-[120px] text-center border-r-2">PSC</th>
          <th className="w-[120px] text-center border-r-2">ARR</th>
          <th className="w-[120px] text-center border-r-2">TIME</th>
          <th className="w-[120px] text-center">Fclk</th>
        </tr>
        <tr>
          <td className="w-[120px] text-center border-r-2">{pscCalculated}</td>
          <td className="w-[120px] text-center border-r-2">{arrCalculated}</td>
          <td className="w-[120px] text-center border-r-2">{timeCalculated}</td>
          <td className="w-[120px] text-center"> {fclkCalculated}</td>
        </tr>
      </table>
      {/* <div className="w-[300px]">
       
      </div> */}

      <div className="flex flex-col space-y-5 mt-5">
        <div className="relative">
          <input
            type="number"
            {...register("psc", { min: 0, max: 65536 })}
            className={`w-[300px] h-[50px] rounded-md mr-4 text-black font-bold ${
              errors?.psc ? "px-7" : "px-3"
            }`}
          />
          <label htmlFor="">PSC</label>
          {errors?.psc && (
            <Tippy
              content={
                <>
                  {errors.psc?.type === "min" && <MinLength data={0} />}
                  {errors?.psc?.type === "max" && <MaxLength data={65536} />}
                </>
              }
            >
              <div className="absolute text-red-500 top-1/2 transform -translate-y-1/2 left-1 rounded-full border-2 w-[20px] h-[20px] grid place-items-center border-red-500 text-sm">
                i
              </div>
            </Tippy>
          )}
        </div>

        <div className="relative">
          <input
            type="number"
            {...register("arr", {
              min: 0,
              max: maxArr,
            })}
            className={`w-[300px] h-[50px] rounded-md mr-4 text-black font-bold ${
              errors?.arr ? "px-7" : "px-3"
            }`}
          />
          <label htmlFor="">
            ARR{" "}
            <select className="bg-black font-bold" {...register("mode")}>
              <option value="16">16 Bit mode</option>
              <option value="32">32 Bit mode</option>
            </select>
          </label>

          {errors?.arr && (
            <Tippy
              content={
                <>
                  {errors.arr?.type === "min" && <MinLength data={0} />}
                  {errors?.arr?.type === "max" && <MaxLength data={maxArr} />}
                </>
              }
            >
              <div className="absolute text-red-500 top-1/2 transform -translate-y-1/2 left-1 rounded-full border-2 w-[20px] h-[20px] grid place-items-center border-red-500 text-sm">
                i
              </div>
            </Tippy>
          )}
        </div>

        <div>
          <input
            type="number"
            {...register("time")}
            className="w-[300px] h-[50px] rounded-md mr-4 text-black px-3 font-bold"
            min={0}
          />
          <label htmlFor="">Time</label>
        </div>

        <div>
          <input
            type="number"
            {...register("fclk")}
            className="w-[300px] h-[50px] rounded-md mr-4 text-black px-3 font-bold"
            min={0}
          />
          <label htmlFor="">FCLK</label>
        </div>
      </div>

      <button
        onClick={() => reset()}
        className="bg-white text-black px-10 mt-5 py-2 rounded-md "
      >
        Clear
      </button>
    </div>
  );
}
