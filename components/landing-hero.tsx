'use client';

import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

export default function LandingHero() {
  const { isSignedIn } = useAuth();

  return (
    <div className="relative text-white font-bold py-36 text-center space-y-5 bg-grid-pattern bg-light-grid mb-10">
      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold animate-bounce">
          <h1 className="animate-fade-in-up">The Best AI Tool for</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            <TypewriterComponent
              options={{
                strings: [
                  'Chatbot.',
                  'Photo Generation.',
                  'Video Generation.',
                  'Music Generation.',
                  'Blog Writing.',
                  'Mail Writing.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="text-sm md:text-xl font-light text-zinc-400 animate-pulse">
            Create content using AI 10x faster.
          </div>
          <div>
            <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
              <Button
                variant="premium"
                className="md:text-lg p-4 md:p-6 rounded-full font-semibold transform transition-transform duration-500 hover:scale-105 hover:shadow-lg"
              >
                Start Generating For Free
              </Button>
            </Link>
          </div>
          <div className="text-zinc-400 text-xs md:text-sm font-normal">
            No credit card required.
          </div>
        </div>
      </div>
    </div>
  );
}
