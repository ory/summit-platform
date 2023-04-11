import { useState } from "react";
import { fetchRecoveryLink } from "../utils";
import { useRouter } from "next/router";

const EmailSignup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const createIdentity = async (email) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ORY_SDK_URL}/admin/identities`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ORY_PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          schema_id: "preset://email",
          traits: {
            email: email,
          },
        }),
      }
    );

    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const identityResponse = await createIdentity(email);

    if (identityResponse.status === 409 || identityResponse.ok) {
      const result = await fetchRecoveryLink(email);
      if (result) {
        // handle success
        console.log("Recovery link sent successfully");
        router.push("/please-check-your-email");
      } else {
        // handle error
        console.error("Error sending recovery link");
      }
    } else {
      // handle identity creation error
      console.error("Error creating identity");
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email to get your ticket"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border-2 border-gray-400 focus:border-blue-800 w-64 rounded-2xl"
        />
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 text-blue-500" />
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
