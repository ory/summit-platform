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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Recovery Link</button>
    </form>
  );
};

export default EmailSignup;
