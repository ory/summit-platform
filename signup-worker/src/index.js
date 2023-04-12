addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === "OPTIONS") {
    // Return CORS headers for OPTIONS requests
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Access-Control-Allow-Methods": "POST", // Allow POST requests
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Access-Control-Allow-Methods", // Specify allowed request headers
        "Access-Control-Max-Age": "86400", // Preflight request cache for 24 hours
      },
    });
  } else if (request.method === "POST") {
    const body = await request.json();
    // Create a new account in Ory Network
    const createIdentity = async () => {
      const response = await fetch(
        `${env.NEXT_PUBLIC_ORY_SDK_URL}/admin/identities`,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            Authorization: `Bearer ${env.NEXT_PUBLIC_ORY_PAT}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    };
    const identityResponse = await createIdentity(); // await the createIdentity function
    return new Response(identityResponse.body, {
      // Return the response from the createIdentity function
      status: identityResponse.status,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Content-Type": "application/json",
      },
    });
  }
}
