import { LoginButton } from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { GiPadlock } from 'react-icons/gi';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-white font-semibold text-6xl drop-shadow-md flex space-x-3 items-center justify-center',
            font.className
          )}
        >
          <GiPadlock className="text-yellow-600" /> Auth
        </h1>
        <p className="text-white text-lg">A simple autthentication service</p>

        <div>
          <LoginButton>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-gray-100"
            >
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
