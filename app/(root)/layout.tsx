import SignoutButton from '@/components/SignoutButton';
import { Button } from '@/components/ui/button';
import {
	getCurrentUser,
	isAuthenticated,
	signOut,
} from '@/lib/actions/auth.action';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export default async function layout({ children }: Props) {
	const isUserAuthenticated = await isAuthenticated();
	const user = isUserAuthenticated ? await getCurrentUser() : null;
	if (!isUserAuthenticated) redirect('/sign-in');

	return (
		<div className='root-layout'>
			<nav className='flex flex-row justify-between items-center px-4 py-2 '>
				<Link
					href={'/'}
					className='flex items-center gap-2'>
					<Image
						src={'/logo.svg'}
						alt='logo'
						width={38}
						height={32}
					/>
					<h2 className='text-primary-100'>PrepWise</h2>
				</Link>
				{user && isUserAuthenticated && (
					<div className='flex items-center gap-2'>
						<SignoutButton />
						<span className='rounded-full w-8 h-8 bg-primary' />
					</div>
				)}
			</nav>
			{children}
		</div>
	);
}
