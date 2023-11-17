import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

export default function Home() {
  return (
    <div className="flex justify-between gap-4 mt-4">
      <div className="w-9/12 gap-2">
        <div className="flex justify-between">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div>
          <Transactions />
        </div>
        <div>
          <Chart />
        </div>
      </div>
      <div className="w-3/12">
        <RightBar />
      </div>
    </div>
  )
}
