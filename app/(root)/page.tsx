import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function page({}: Props) {
	return (
		<>
			<section className='card-cta'>
				<div className='flex flex-col gap-6 max-w-lg'>
					<h2 className=''>
						Get Interview Ready with AI-Powered practice and feedback
					</h2>
					<p className='text-lg'>
						Practice onreal intervew questions & get instant feedback
					</p>
					<Button
						asChild
						className='btn-primary'>
						<Link href={'interview'}>Start an interview</Link>
					</Button>
				</div>
				<Image
					src={'/robot.png'}
					alt='robo-dude'
					width={400}
					height={400}
					className='max-sm:hidden'
				/>
			</section>
			<section className='flex flex-col gap-6 mt-8'>
				<h2>Your Interviews</h2>

				<div className='interviews-section'>
					{dummyInterviews.map((interview) => (
						<InterviewCard
							interviewCardProps={{ ...interview }}
							key={interview.id}
						/>
					))}
				</div>
			</section>
			<section className='flex flex-col gap-6 mt-8'>
				<h2>Take an Interview</h2>
				<div className='interviws-section'>
					{dummyInterviews.map((interview) => (
						<InterviewCard
							interviewCardProps={{ ...interview }}
							key={interview.id}
						/>
					))}
				</div>
			</section>
		</>
	);
}
