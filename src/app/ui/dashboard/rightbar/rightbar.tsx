import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'
import ExchangeRate from '../exchange-rate/exchange-rate'
import WheaterForecast from '../wheater-forecast/wheater-forecast'

export default function RightBar() {
  return (
    <div className="flex flex-1 flex-col mr-0 lg:mr-2">
      <div className="relative bg-gradient-to-b from-[--bgHover] p-4 rounded-md mb-4">
        <WheaterForecast />
      </div>

      <div className="relative bg-gradient-to-b from-[--bgHover] p-4 rounded-md mb-4">
        <ExchangeRate />
      </div>

      <div className="relative bg-gradient-to-b from-[--bgHover] p-4 rounded-md mt-2">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image
            src="/astronaut.png"
            alt="astronaut"
            width={180}
            height={180}
            className="object-fill opacity-20"
          />
        </div>
        <div className="ml-2 flex flex-col gap-4">
          <span className="font-bold">🌟 Available Now</span>
          <h3 className="font-semibold text-base">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="font-thin text-sm">Takes 4 minutes to learn</span>
          <p className="font-thin text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            explicabo ex reprehenderit et quos possimus eius eum omnis? Alias
            animi nobis reiciendis praesentium iure repellendus tempore eligendi
            quaerat, id recusandae!
          </p>
          <button className="flex items-center bg-purple-600 text-white border-0 rounded-sm p-2 gap-2 cursor-pointer max-w-fit">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}
