addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === "OPTIONS") {
    // Return CORS headers for OPTIONS requests
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400", // Preflight request cache for 24 hours
      },
    });
  } else if (request.method === "POST") {
    const body = await request.json();
    const email = body.email;
    //const agreeMarketing = json.get("agreeMarketing");

    // Create a new account in Ory Network
    const createIdentity = async (email) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ORY_SDK_URL}/admin/identities`,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ORY_PAT}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    };

    // Placeholder: Call the CRM service API with the email
    // const crmServiceResponse = await fetch("https://crm-service-api.com", {
    //   method: "POST",
    //   body: JSON.stringify({ email, agreeMarketing }),
    //   headers: { "Content-Type": "application/json" },
    // });

    return new Response(createIdentity);
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
}
