'use client';
import React from 'react';
import { Button } from './ui/button';
import { signOut } from '@/lib/actions/auth.action';

type Props = {};

export default function SignoutButton({}: Props) {
	return (
		<Button
			variant={'destructive'}
            size={"sm"}
			onClick={async () => signOut()}>
			Signout
		</Button>
	);
}
