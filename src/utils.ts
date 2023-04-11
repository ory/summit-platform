const fetchRecoveryLink = async (email) => {
  try {
    const response1 = await fetch(
      "https://login.vinckr.com/self-service/recovery/browser",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      }
    );

    const cookies = response1.headers.get("set-cookie");
    const data1 = await response1.json();
    const csrfToken = data1.ui.nodes.find(
      (node) => node.attributes.name === "csrf_token"
    ).attributes.value;

    const response2 = await fetch(
      `https://login.vinckr.com/self-service/recovery?flow=${data1.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: cookies,
        },
        body: JSON.stringify({
          method: "link",
          email: email,
          csrf_token: csrfToken,
        }),
        credentials: "include",
      }
    );

    const data2 = await response2.json();

    return data2;
  } catch (error) {
    console.error("Error fetching recovery link:", error);
  }
};

export { fetchRecoveryLink };
