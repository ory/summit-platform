import { useState } from "react";
import { fetchRecoveryLink } from "../utils";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetchRecoveryLink(email);

    if (result) {
      // handle success
      console.log("Recovery link sent successfully");
    } else {
      // handle error
      console.error("Error sending recovery link");
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
