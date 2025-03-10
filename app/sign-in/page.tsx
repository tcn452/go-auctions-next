'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AuthForm from '../components/forms/Authform';

interface Data {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleFormSubmit = async (data: Data) => {
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!response?.error) {
      router.push('/');
      router.refresh();
    } else if (response.status === 401) {
      setError('Your email or password is incorrect');
    } else {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-green-800 mb-4">
          Login to Go Auctions
        </h1>
        {error && (
          <p className="mb-4 text-center text-red-600 font-medium">{error}</p>
        )}
        <AuthForm
          title="Login to Your Account"
          onSubmit={handleFormSubmit}
          buttonText="Login"
          linkDescription="New here?"
          linkText="Create an account"
          linkHref="/register"
          isFullForm={false}
        />
        <div className="text-center mt-4">
          <Link
            href="/request-reset-password"
            className="text-green-800 hover:underline text-sm"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
