import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

function DashboardStatsGrid() {
	return (
		<div className='flex gap-4'>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
					<IoBagHandle className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Sales
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							$54,232
						</strong>
						<span className='text-sm text-green-500 pl-2'>
							+343
						</span>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
					<IoPieChart className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Expenses
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							$3,423
						</strong>
						<span className='text-sm text-green-500 pl-2'>
							-343
						</span>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
					<IoPeople className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Customers
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							12,313
						</strong>
						<span className='text-sm text-red-500 pl-2'>-30</span>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
					<IoCart className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Orders
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							16,432
						</strong>
						<span className='text-sm text-red-500 pl-2'>-43</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return (
		<div className='bg-white rounded-xl px-10 py-6 flex-1 border border-gray-200 flex items-center hover:scale-105 duration-300 '>
			{children}
		</div>
	)
}

export default DashboardStatsGrid
