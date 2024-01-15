// import React from 'react'
import { useSidebarContext } from "../context/SidebarContext";
import { HiBell, HiEye, HiMenuAlt1, HiSearch, HiX } from "react-icons/hi";
import {
	DarkThemeToggle,
	Dropdown,
	Label,
	TextInput,
	Navbar,
	Avatar,
} from "flowbite-react";
import SmallScreen from "../helpers/SmallScreen";

const NavbarHeader = () => {
	const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } =
		useSidebarContext();

	return (
		<Navbar fluid>
			<div className="w-full p-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						{isPageWithSidebar && (
							<button
								onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
								className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								<span className="sr-only">Toggle Sidebar</span>
								{isOpenOnSmallScreens && SmallScreen() ? (
									<HiX className="h-6 w-6" />
								) : (
									<HiMenuAlt1 className="h-6 w-6" />
								)}
							</button>
						)}
						<Navbar.Brand href="/">
							<img src="" alt="" className="mr-3 h-6 sm:h-8" />
							<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
								Frodev Inc.
							</span>
						</Navbar.Brand>
						<form action="" className="ml-16 hidden md:block">
							<Label htmlFor="search" className="sr-only">
								Search
							</Label>
							<TextInput
								icon={HiSearch}
								id="search"
								name="search"
								placeholder="Search"
								size={32}
								type="search"
								required
							/>
						</form>
					</div>
					<div className="flex items-center lg:gap-3">
						<div className="flex items-center">
							<button
								onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
								className="cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
							>
								<span className="sr-only">Search</span>
								<HiSearch className="h-6 w-6" />
							</button>
							<NotificationBellDropDown />
							<DarkThemeToggle />
						</div>
						<div className="hidden lg:block">
							<UserDropdown />
						</div>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

const NotificationBellDropDown = () => {
	return (
		<Dropdown
			arrowIcon={false}
			inline
			label={
				<span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
					<span className="sr-only">Notifications</span>
					<HiBell className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
				</span>
			}
		>
			<div className="max-w-[24rem]">
				<div className="block rounded-t-xl bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
					Notifications
				</div>
				<div>
					<a
						href="#"
						className="flex border-y py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
					>
						<div className="shrink-0">
							<img alt="" src="" className="h-11 w-11 rounded-full" />
						</div>
						<div className="w-full pl-3">
							<div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
								New message from&nbsp;
								<span className="font-semibold text-gray-900 dark:text-white">
									Bonnie Green
								</span>
								: Hey whats up?
							</div>
							<div className="text-xs font-medium text-primary-700 dark:text-primary-400">
								a few moments ago
							</div>
						</div>
					</a>
				</div>
				<a
					href="#"
					className="block rounded-b-xl bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
				>
					<div className="inline-flex items-center gap-x-2">
						<HiEye className="h-6 w-6" />
						<span>View all</span>
					</div>
				</a>
			</div>
		</Dropdown>
	);
};

const UserDropdown = () => {
	return (
		<Dropdown
			arrowIcon={false}
			inline
			label={
				<span>
					<span className="sr-only">User menu</span>
					<Avatar
						alt=""
						img="../images/users/neil-sims.png"
						rounded
						size="sm"
					/>
				</span>
			}
		>
			<Dropdown.Header>
				<span className="block text-sm">Neil Sims</span>
				<span className="block truncate text-sm font-medium">dispenser</span>
			</Dropdown.Header>
			<Dropdown.Item>Dashboard</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>
			<Dropdown.Item>Earnings</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item>Sign out</Dropdown.Item>
		</Dropdown>
	);
};

export default NavbarHeader;
