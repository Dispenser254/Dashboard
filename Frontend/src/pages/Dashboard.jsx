// import React from 'react'

import { Badge, Datepicker, Table } from "flowbite-react";
import { NavbarSidebar } from "../layouts/NavbarSidebar";
import {
	HiArrowSmallRight,
	HiArrowTrendingUp,
	HiChevronRight,
} from "react-icons/hi2";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

export const Dashboard = () => {
	return (
		<NavbarSidebar>
			<div className="px-4 pt-6">
				<SalesThisWeek />
				<div className="my-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
					<NewProductsThisWeek />
					<NewProductsThisWeek />
					<NewProductsThisWeek />
				</div>
				<Transactions />
			</div>
		</NavbarSidebar>
	);
};

function SalesThisWeek() {
	return (
		<div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
			<div className="mb-4 flex items-center justify-between">
				<div className="shrink-0">
					<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						Kshs. 45,000
					</span>
					<h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
						Sales this week
					</h3>
					<p>Hello muthama</p>
				</div>
				<div className="flex flex-1 items-center justify-end text-base font-bold text-green-600 dark:text-green-400">
					<span className="p-1">12.5%</span> <HiArrowTrendingUp size={20} />
				</div>
			</div>
		</div>
	);
}

function NewProductsThisWeek() {
	return (
		<div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm-p-6 xl:p-8">
			<div className="flex items-center">
				<div className="shrink-0">
					<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						2,340
					</span>
					<h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
						New products this week
					</h3>
				</div>
				<div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-green-600 dark:text-green-">
					<span className="p-1">14.6%</span> <HiArrowTrendingUp size={20} />
				</div>
			</div>
			<NewProductsChart />
			<div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
				<div className="shrink-0">
					<a
						href="#"
						className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
					>
						<span className="p-2"> Products Report</span>
						<HiArrowSmallRight className="translate-y-2" size={20} />
					</a>
				</div>
			</div>
		</div>
	);
}

const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

function NewProductsChart() {
	return (
		<ResponsiveContainer maxHeight={200} width="100%" height="100%">
			<LineChart
				width={500}
				height={200}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="pv"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>
	);
}

function Transactions() {
	return (
		<div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
			<div className="mb-4 flex items-center justify-between">
				<div>
					<h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
						Transactions
					</h3>
					<span className="text-base font-normal text-gray-600 dark:text-gray-400">
						This is a list of latest transactions
					</span>
				</div>
				<div className="shrink-0">
					<a
						href="#"
						className="flex rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
					>
						<span className="p-2"> View all </span>
						<HiArrowSmallRight className="translate-y-2" size={20} />
					</a>
				</div>
			</div>
			<div className="mt-8 flex-col">
				<div className="overflow-x-auto rounded-lg">
					<div className="inline-block min-w-full align-middle">
						<div className="overflow-hidden shadow sm:rounded-lg">
							<Table
								striped
								className="min-w-full divide-y divide-gray-200 dark:divide-gray-600"
							>
								<Table.Head className="bg-gray-50 dark:bg-gray-700">
									<Table.HeadCell>Transactions</Table.HeadCell>
									<Table.HeadCell>Date &amp; Time</Table.HeadCell>
									<Table.HeadCell>Amount</Table.HeadCell>
									<Table.HeadCell>Status</Table.HeadCell>
								</Table.Head>
								<Table.Body className="bg-white dark:bg-gray-800">
									<Table.Row>
										<Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
											Payment from{" "}
											<span className="font-semibold">Bonnie Green</span>
										</Table.Cell>
										<Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-white">
											Apr 23, 2024
										</Table.Cell>
										<Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
											Kshs. 25,000
										</Table.Cell>
										<Table.Cell className="flex whitespace-nowrap p-4">
											<Badge color="success">Completed</Badge>
										</Table.Cell>
									</Table.Row>
								</Table.Body>
							</Table>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between pt-3 sm:pt-6">
				<Datepicker autoHide={false} />
				<div className="shrink-0">
					<a
						href="#"
						className="flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-500 dark:hover:bg-gray-700"
					>
						<span className="p-1"> Transactions report </span>
						<HiChevronRight size={20} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
