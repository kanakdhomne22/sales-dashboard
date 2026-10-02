"use client";

import { useState } from "react";

const stats = [
  {
    title: "Total Sales",
    value: "$612.917",
    change: "+2.08%",
    subtitle: "Products vs last month",
    active: true,
  },
  {
    title: "Total Orders",
    value: "34.760",
    change: "+12.4%",
    subtitle: "Orders vs last month",
  },
  {
    title: "Visitor",
    value: "14.987",
    change: "-2.08%",
    subtitle: "Users vs last month",
    negative: true,
  },
  {
    title: "Total Sold Products",
    value: "12.987",
    change: "+12.1%",
    subtitle: "Products vs last month",
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const products = [
  ["Electronic", "2,487", "+1.8%"],
  ["Games", "1,828", "+2.3%"],
  ["Furniture", "1,463", "-0.04%"],
];

const countries = [
  ["United States", "2,417"],
  ["Germany", "812"],
  ["Australia", "2,281"],
  ["France", "287"],
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  return (
    <main className="min-h-screen bg-[#f4f5fa] text-[#171923]">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="w-[235px] flex-shrink-0 border-r border-gray-200 bg-white px-5 py-7">

          {/* LOGO */}
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4255f5] text-lg font-bold text-white">
              S
            </div>

            <span className="text-xl font-bold">
              Salesly
            </span>
          </div>

          {/* MENU */}
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Menu
          </p>

          <nav className="space-y-1">
            {["Dashboard", "Report", "Products", "Customer"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active === item
                    ? "bg-[#4857f6] text-white shadow-lg shadow-blue-200"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <span className="text-base">
                  {item === "Dashboard" && "⌂"}
                  {item === "Report" && "▣"}
                  {item === "Products" && "◈"}
                  {item === "Customer" && "♙"}
                </span>

                {item}
              </button>
            ))}
          </nav>

          {/* FINANCIAL */}
          <p className="mb-3 mt-9 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Financial
          </p>

          <nav className="space-y-1">
            {["Transactions", "Invoices"].map((item) => (
  <button
    key={item}
    onClick={() => setActive(item)}
    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm ${
      active === item
        ? "bg-[#4857f6] text-white shadow-lg shadow-blue-200"
        : "text-gray-500 hover:bg-gray-100"
    }`}
  >
    <span>◉</span>
    {item}
  </button>
))}
          </nav>

          {/* TOOLS */}
          <p className="mb-3 mt-9 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Tools
          </p>

          <nav className="space-y-1">
            {["Settings", "Feedback", "Help"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 hover:bg-gray-100"
              >
                <span>⚙</span>
                {item}
              </button>
            ))}
          </nav>

          {/* UPGRADE CARD */}
          <div className="mt-12 rounded-2xl bg-[#161821] p-5 text-white">
            <div className="mb-3 text-xl">
              ✦
            </div>

            <h3 className="font-semibold">
              Upgrade Pro
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-400">
              Discover the benefits of an upgraded account.
            </p>

            <button className="mt-4 w-full rounded-lg bg-[#4857f6] py-2 text-xs font-semibold">
              Upgrade $30
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <section className="flex-1 px-5 py-6 sm:px-8 lg:px-10">

          {/* ===================================================== */}
          {/* INVOICES PAGE */}
          {/* ===================================================== */}

          {active === "Invoices" ? (
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <h1 className="text-2xl font-bold">
                Invoices
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Manage and view your invoices.
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">

                  <thead>
                    <tr className="border-b text-left text-gray-500">
                      <th className="py-3">
                        Invoice
                      </th>

                      <th className="py-3">
                        Customer
                      </th>

                      <th className="py-3">
                        Amount
                      </th>

                      <th className="py-3">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr className="border-b">
                      <td className="py-4">
                        #INV-001
                      </td>

                      <td className="py-4">
                        Alexandra
                      </td>

                      <td className="py-4">
                        $1,250
                      </td>

                      <td className="py-4 text-green-600">
                        Paid
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-4">
                        #INV-002
                      </td>

                      <td className="py-4">
                        John Smith
                      </td>

                      <td className="py-4">
                        $890
                      </td>

                      <td className="py-4 text-yellow-600">
                        Pending
                      </td>
                    </tr>

                    <tr>
                      <td className="py-4">
                        #INV-003
                      </td>

                      <td className="py-4">
                        Sarah
                      </td>

                      <td className="py-4">
                        $2,100
                      </td>

                      <td className="py-4 text-green-600">
                        Paid
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

          ) : (

            /* ===================================================== */
            /* DASHBOARD */
            /* ===================================================== */

            <>

              {/* TOP GRID */}
              <div className="grid gap-5 xl:grid-cols-[1fr_1fr_320px]">

                {/* STAT CARDS */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-2">

                  {stats.map((stat) => (
                    <div
                      key={stat.title}
                      className={`rounded-2xl p-5 shadow-sm ${
                        stat.active
                          ? "bg-[#4857f6] text-white"
                          : "bg-white"
                      }`}
                    >

                      <div className="mb-7 flex items-start justify-between">

                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                            stat.active
                              ? "bg-white/20"
                              : "bg-gray-100"
                          }`}
                        >
                          ◉
                        </div>

                        <span
                          className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                            stat.negative
                              ? "bg-red-100 text-red-500"
                              : stat.active
                              ? "bg-green-400 text-green-950"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {stat.change}
                        </span>

                      </div>

                      <p
                        className={`text-xs ${
                          stat.active
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {stat.title}
                      </p>

                      <div className="mt-1 flex items-end justify-between gap-3">

                        <h2 className="text-2xl font-bold">
                          {stat.value}
                        </h2>

                        <p
                          className={`text-[9px] ${
                            stat.active
                              ? "text-blue-100"
                              : "text-gray-400"
                          }`}
                        >
                          {stat.subtitle}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

                {/* PRODUCT STATISTIC */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">

                  <div className="flex items-start justify-between">

                    <div>
                      <h2 className="font-semibold">
                        Product Statistic
                      </h2>

                      <p className="text-[10px] text-gray-400">
                        Track your product sales
                      </p>
                    </div>

                    <button className="rounded-lg bg-gray-50 px-3 py-2 text-[10px]">
                      Today⌄
                    </button>

                  </div>

                  {/* DONUT */}
                  <div className="relative mx-auto my-7 h-40 w-40 rounded-full border-[12px] border-[#e6e7ec]">

                    <div className="absolute inset-[-12px] rotate-[-25deg] rounded-full border-[6px] border-transparent border-l-[#4857f6] border-t-[#4857f6]" />

                    <div className="absolute inset-[10px] rotate-[15deg] rounded-full border-[6px] border-transparent border-l-[#334cf0] border-t-[#334cf0]" />

                    <div className="absolute inset-[25px] rotate-[50deg] rounded-full border-[6px] border-transparent border-l-[#f04456] border-t-[#f04456]" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold">
                        9.829
                      </span>

                      <span className="text-[9px] text-gray-400">
                        Products Sales
                      </span>
                    </div>

                  </div>

                  <div className="space-y-3">

                    {products.map(([name, value, change]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between text-xs"
                      >

                        <span className="text-gray-600">
                          ● {name}
                        </span>

                        <div className="flex items-center gap-2">

                          <b>
                            {value}
                          </b>

                          <span
                            className={`rounded-full px-1.5 py-0.5 text-[8px] ${
                              change.startsWith("-")
                                ? "bg-red-100 text-red-500"
                                : "bg-green-100 text-green-600"
                            }`}
                          >
                            {change}
                          </span>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              </div>

              {/* LOWER GRID */}
              <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_320px]">

                {/* CUSTOMER HABITS */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">

                  <div className="flex items-center justify-between">

                    <div>
                      <h2 className="font-semibold">
                        Customer Habits
                      </h2>

                      <p className="text-[10px] text-gray-400">
                        Track your customer habits
                      </p>
                    </div>

                    <button className="rounded-lg bg-gray-50 px-3 py-2 text-[10px]">
                      This year⌄
                    </button>

                  </div>

                  <div className="mt-5 flex gap-5 text-[10px]">
                    <span className="text-gray-400">
                      ● Seen product
                    </span>

                    <span className="text-[#4857f6]">
                      ● Sales
                    </span>
                  </div>

                  {/* CHART */}
                  <div className="mt-8 flex h-52 items-end justify-between gap-3 border-b border-gray-100 px-2">

                    {months.map((month, index) => {

                      const blueHeights = [
                        72,
                        105,
                        58,
                        92,
                        48,
                        86,
                        52,
                      ];

                      const grayHeights = [
                        52,
                        82,
                        72,
                        105,
                        70,
                        95,
                        72,
                      ];

                      return (
                        <div
                          key={month}
                          className="flex h-full flex-1 flex-col items-center justify-end"
                        >

                          <div className="flex h-full items-end gap-1">

                            <div
                              className="w-3 rounded-t-md bg-[#dfe2e8]"
                              style={{
                                height: `${grayHeights[index]}px`,
                              }}
                            />

                            <div
                              className="w-3 rounded-t-md bg-[#4857f6]"
                              style={{
                                height: `${blueHeights[index]}px`,
                              }}
                            />

                          </div>

                          <span className="mt-3 text-[9px] text-gray-400">
                            {month}
                          </span>

                        </div>
                      );
                    })}

                  </div>

                  <div className="mt-4 flex justify-center">

                    <div className="rounded-xl bg-[#181a22] px-4 py-3 text-white shadow-lg">

                      <p className="text-[9px] text-gray-400">
                        ● 43.787 Products
                      </p>

                      <p className="mt-1 text-[9px] text-gray-400">
                        <span className="text-[#5364ff]">
                          ●
                        </span>{" "}
                        39.784 Products
                      </p>

                    </div>

                  </div>

                </div>

                {/* CUSTOMER GROWTH */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">

                  <div className="flex items-start justify-between">

                    <div>
                      <h2 className="font-semibold">
                        Customer Growth
                      </h2>

                      <p className="text-[10px] text-gray-400">
                        Track customer by locations
                      </p>
                    </div>

                    <button className="rounded-lg bg-gray-50 px-3 py-2 text-[10px]">
                      Today⌄
                    </button>

                  </div>

                  {/* BUBBLES */}
                  <div className="relative mx-auto my-7 h-48 w-48">

                    <div className="absolute left-2 top-16 flex h-20 w-20 items-center justify-center rounded-full bg-[#6976ef] text-xs font-bold text-white">
                      287
                    </div>

                    <div className="absolute left-16 top-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#5364df] text-xs font-bold text-white">
                      2.417
                    </div>

                    <div className="absolute left-14 top-24 flex h-20 w-20 items-center justify-center rounded-full bg-[#4857d1] text-xs font-bold text-white">
                      2.281
                    </div>

                    <div className="absolute left-28 top-24 flex h-16 w-16 items-center justify-center rounded-full bg-[#7d88ed] text-xs font-bold text-white">
                      812
                    </div>

                  </div>

                  <div className="space-y-3">

                    {countries.map(([country, value]) => (
                      <div
                        key={country}
                        className="flex items-center justify-between text-xs"
                      >

                        <span className="flex items-center gap-2 text-gray-500">

                          <span className="h-2 w-2 rounded-full bg-[#5364df]" />

                          {country}

                        </span>

                        <b>
                          {value}
                        </b>

                      </div>
                    ))}

                  </div>

                </div>
              </div>

            </>
          )}

        </section>
      </div>
    </main>
  );
}