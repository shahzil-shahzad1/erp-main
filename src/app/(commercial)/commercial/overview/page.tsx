// app/commercial-overview/page.tsx
import Image from "next/image"
import { Building } from "lucide-react";
import { DollarSignIcon } from "lucide-react";
import { BlocksIcon } from "lucide-react";
export default function CommercialOverview() {

  const commercialOverviewCards = [
    {
      title: "Total Sales ",
      amount: "$328K",
      image: "/sales.png",
      bg: "bg-gradient-to-r from-blue-300 to-blue-200",
      imagebg: "bg-gradient-to-r from-blue-400 to-gray-300",
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Total Purchases ",
      amount: "$231K",
      image: "/purchase.png",
      bg: "bg-gradient-to-r from-purple-300 to-gray-200",
      imagebg: "bg-gradient-to-r from-purple-400 to-purple-300",
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Gross Profit",
      amount: " $97K",
      image: "/profit.png",
      bg: "bg-gradient-to-r from-green-300 to-gray-200",
      imagebg: "bg-gradient-to-r from-green-400 to-green-300",
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Active Orders ",
      amount: "$156K",
      image: "/orders.png",
      bg: "bg-gradient-to-r from-orange-300 to-gray-200",
      imagebg: "bg-gradient-to-r from-orange-400 to-orange-300",
      items: [
        "• In progress",
        "from last month"
      ]
    }
  ]

  return (
    <div className="bg-gray-200 rounded-tl-lg shadow-sm p-6">
      {/* Header Section */}
      <div className="mb-4 text-black flex justify-between items-center">
        <div className="flex gap-2 ">
            <div className="bg-[#386fff] p-2 rounded-lg">
              <Building className="w-8 h-8 text-white" />
            </div>
          <div className="mb-1">
            <h1 className="text-2xl font-bold">Commercial Overview</h1>
          <p className="text-gray-600 pl-7">Monitor sales, purchases, and commercial operations</p>
          </div>
        </div>

        <button className="bg-[#6c31f7] flex gap-3 py-2 px-5 cursor-pointer rounded-lg transition-all duration-200 hover:scale-[1.03] items-center">
          <BlocksIcon className="w-4 h-4 " />
          <div className="text-white">Generate Report</div>
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="flex gap-6 justify-between mb-8">
        {/* Total Sales */}
        {commercialOverviewCards.map((card) => (
          <div
            className={`border border-gray-200 rounded-lg p-5 flex justify-between items-start text-black ${card.bg} hover:shadow-sm transition-all hover:scale-[1.05] transition-all duration-200 cursor-pointer`}
            key={card.title}
            style={{ width: '23%', minWidth: '200px' }}
          >
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <div className="text-xl font-bold mb-3">{card.amount}</div>
              <ul className="text-sm text-gray-600 space-y-1">
                {card.items.map((item, index) => (
                  <li
                    key={index}
                    className={`${!item.startsWith('•') ? 'pl-4' : ''} ${index === 0 ? 'font-medium' : ''}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`p-3 rounded-lg bg-white`}>
              <Image
                src={card.image}
                height={26}
                width={26}
                className="object-contain"
                alt={card.title}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Chart Section */}
      {/* <div>
        <h2 className="text-xl font-semibold mb-2">Sales vs Purchases</h2>
        <p className="text-gray-600 mb-4">Monthly comparison and profit analysis</p> */}
      {/* Placeholder for chart - would be replaced with actual chart implementation */}
      {/* <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          <p className="text-gray-1000">Chart visualization would appear here</p>
        </div>
      </div> */}

      <div className="flex flex-col text-black gap-4 bg-white px-10 py-4 rounded-lg">
        {/* Header Section */}
        <div className="flex items-center gap-3">
        <div className="bg-[#4b45f8] p-2 rounded-lg">
          <DollarSignIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Quick Actions</h3>
            <p className="text-sm text-gray-600">Common commercial operations</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-4">
          {commercialOverviewCards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-3 p-6 rounded-lg border border-gray-200 transition-all hover:shadow-md ${card.bg} w-full sm:w-[calc(40%-0.5rem)] md:w-[calc(22.33%-0.66rem)]  hover:scale-[1.05] transition-all duration-200 cursor-pointer`}
            >
              <div className={`p-3 rounded-lg ${card.imagebg}`}>
                <Image
                  src={card.image}
                  height={40}
                  width={40}
                  className="object-contain"
                  alt={card.title}
                />
              </div>
              <div className="font-medium text-center">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}