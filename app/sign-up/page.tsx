'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AuthForm from '../components/forms/Authform';
import { signIn } from 'next-auth/react';


interface Data {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

export default function RegistrationForm() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleFormSubmit = async (data: Data) => {
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      signIn("Directus Credentials", { 
        email : data.email,
        password : data.password
      })
      router.push('/');
      router.refresh();
    } else if (response.status === 409) {
      setError('A user with this email already exists');
    } else {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-green-800 mb-4">
          Register to Go Auctions
        </h1>
        {error && (
          <p className="mb-4 text-center text-red-600 font-medium">{error}</p>
        )}
        <AuthForm
          title="Create Your Account"
          onSubmit={handleFormSubmit}
          buttonText="Register"
          linkDescription="Already have an account?"
          linkText="Login"
          linkHref="/login"
        />
      </div>
    </div>
  );
}
