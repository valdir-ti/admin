import Image from "next/image";

export default function Transactions() {
  return (
    <div className="flex flex-1 flex-col p-4 bg-[--bgSoft] hover:bg-[--bgHover] rounded-md mt-4">
      <h2 className="text-lg text-[--textSoft]">Latest Transactions</h2>
      <table className="mt-4 ml-2">
        <thead>
          <tr>
            <th className="text-start">Name</th>
            <th className="text-start">Status</th>
            <th className="text-start">Date</th>
            <th className="text-start">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
                <div className="flex items-center mt-4">
                  <Image 
                    alt="John Doe" 
                    src='/noavatar.png' 
                    width={28} 
                    height={28}
                    className="rounded-full"
                    />
                  <h4 className="ml-2">John Doe</h4>
                </div>
            </td>
            <td>
              <span className="bg-yellow-500 rounded-sm p-1">Pending</span>
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
          <tr>
            <td className="">
                <div className="flex items-center mt-4">
                  <Image 
                    alt="John Doe" 
                    src='/noavatar.png' 
                    width={28} 
                    height={28}
                    className="rounded-full"
                    />
                  <h4 className="ml-2">John Doe</h4>
                </div>
            </td>
            <td>
              <span className="bg-slate-600 rounded-sm p-1">Done</span>
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
          <tr>
            <td className="">
                <div className="flex items-center mt-4">
                  <Image 
                    alt="John Doe" 
                    src='/noavatar.png' 
                    width={28} 
                    height={28}
                    className="rounded-full"
                    />
                  <h4 className="ml-2">John Doe</h4>
                </div>
            </td>
            <td>
              <span className="bg-red-500 rounded-sm p-1">Cancelled</span>              
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
          <tr>
            <td className="">
                <div className="flex items-center mt-4">
                  <Image 
                    alt="John Doe" 
                    src='/noavatar.png' 
                    width={28} 
                    height={28}
                    className="rounded-full"
                    />
                  <h4 className="ml-2">John Doe</h4>
                </div>
            </td>
            <td>
              <span className="bg-yellow-500 rounded-sm p-1">Pending</span>
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
          <tr>
            <td className="">
                <div className="flex items-center mt-4">
                  <Image 
                    alt="John Doe" 
                    src='/noavatar.png' 
                    width={28} 
                    height={28}
                    className="rounded-full"
                    />
                  <h4 className="ml-2">John Doe</h4>
                </div>
            </td>
            <td>
              <span className="bg-slate-600 rounded-sm p-1">Done</span>
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
