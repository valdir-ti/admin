import Image from "next/image";

export default function Transactions() {
  return (
    <div className="flex flex-1 flex-col p-4 bg-[--bgSoft] rounded-md mt-4">
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
          <tr className="hover:bg-[--bgHover] cursor-pointer">
            <td className="flex items-center p-2 pl-1">
                <Image
                  alt="John Doe" 
                  src='/noavatar.png' 
                  width={28} 
                  height={28}
                  className="rounded-full"
                  />
                <h4 className="ml-2">John Doe</h4>
            </td>
            <td>
              <span className="bg-yellow-500 rounded-sm p-1">Pending</span>
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
          <tr className="hover:bg-[--bgHover] cursor-pointer">
            <td className="flex items-center p-2 pl-1">
                <Image
                  alt="John Doe" 
                  src='/noavatar.png' 
                  width={28} 
                  height={28}
                  className="rounded-full"
                  />
                <h4 className="ml-2">John Doe</h4>
            </td>
            <td>
              <span className="bg-slate-600 rounded-sm p-1">Done</span>
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
          <tr className="hover:bg-[--bgHover] cursor-pointer">
            <td className="flex items-center p-2 pl-1">
                <Image
                  alt="John Doe" 
                  src='/noavatar.png' 
                  width={28} 
                  height={28}
                  className="rounded-full"
                  />
                <h4 className="ml-2">John Doe</h4>
            </td>
            <td>
              <span className="bg-red-500 rounded-sm p-1">Cancelled</span>              
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
          <tr className="hover:bg-[--bgHover] cursor-pointer">
            <td className="flex items-center p-2 pl-1">
                <Image
                  alt="John Doe" 
                  src='/noavatar.png' 
                  width={28} 
                  height={28}
                  className="rounded-full"
                  />
                <h4 className="ml-2">John Doe</h4>
            </td>
            <td>
              <span className="bg-yellow-500 rounded-sm p-1">Pending</span>
            </td>
            <td>14.02.2023</td>
            <td>R$3.200</td>
          </tr>
          <tr className="hover:bg-[--bgHover] cursor-pointer">
            <td className="flex items-center p-2 pl-1">
                <Image
                  alt="John Doe" 
                  src='/noavatar.png' 
                  width={28} 
                  height={28}
                  className="rounded-full"
                  />
                <h4 className="ml-2">John Doe</h4>
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
