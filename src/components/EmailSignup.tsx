import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  agreeMarketing: boolean;
};

const ORY_PAT = process.env.NEXT_PUBLIC_ORY_PAT;
console.log(ORY_PAT);
const EmailSignup = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    const email = data.email; // assuming the input field name is 'email'

    fetch("https://login.vinckr.com/admin/identities", {
      method: "POST",
      headers: {
        Authorization: "Bearer ${ORY_PAT}",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        schema_id: "preset://email",
        traits: {
          email: email,
        },
      }),
    })
      .then((response) => {
        console.log(JSON.stringify(response.json()));
      })
      .catch((error) => {
        // Handle error here
      });
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <input
          type="email"
          placeholder="Enter email to get your ticket"
          {...register("email", { required: true })}
          className="p-2 border-2 border-gray-400 focus:border-blue-800 w-64"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("agreeMarketing")}
            className="w-4 h-4 text-blue-500"
          />
          <label htmlFor="agreeMarketing" className="ml-2">
            Also sign up to the Ory Newsletter
          </label>
        </div>
        <button
          type="submit"
          className="p-2 bg-black text-white hover:bg-blue-800"
        >
          Get your free ticket
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;
