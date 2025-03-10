import Link from "next/link";
import { FormEvent, useState } from "react";

interface Data {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
}

interface AuthFormProps {
  title: string;
  buttonText: string;
  onSubmit: (data: Data) => void;
  linkText: string;
  linkDescription: string;
  linkHref: string;
  isFullForm?: boolean;
}

export default function AuthForm({
  title,
  buttonText,
  onSubmit,
  linkText,
  linkHref,
  linkDescription,
  isFullForm = true,
}: AuthFormProps) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <h1 className="text-xl font-semibold text-green-800 text-center mb-4">
        {title}
      </h1>
      {isFullForm && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>
      )}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition"
      >
        {buttonText}
      </button>
      <p className="text-center text-gray-600 mt-4">
        {linkDescription}{" "}
        <Link href={linkHref} className="text-green-800 hover:underline">
          {linkText}
        </Link>
      </p>
    </form>
  );
}
