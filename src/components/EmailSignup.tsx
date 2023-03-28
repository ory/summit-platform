import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  agreeMarketing: boolean;
};

const EmailSignup = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Add middleware and API call here
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
          className="p-2 border-2 border-gray-400 focus:border-blue-500"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("agreeMarketing")}
            className="w-4 h-4 text-blue-500"
          />
          <label htmlFor="agreeMarketing" className="ml-2">
            Agree to receive marketing emails
          </label>
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white hover:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;
