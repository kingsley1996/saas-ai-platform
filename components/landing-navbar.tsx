'use client';

import Image from 'next/image';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

export default function LandingNavbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-12 mr-2">
          <Image fill alt="Athena Logo" src="/logo.png" />
        </div>
        <h1 className={cn('text-2xl font-bold text-white', font.className)}>
          Athena
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant="outline" className="rounded-full">
            {isSignedIn ? 'Dashboard' : 'Get Started'}
          </Button>
        </Link>
      </div>
    </nav>
  );
}
