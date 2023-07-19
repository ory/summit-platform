# Ory Summit Platform

- Framework: Next.js
- Authentication: Ory Identities
- CSS: Tailwind CSS
- Database: Supabase
- Deployment: Vercel

## Local Development

```bash
npm run dev
```

export
NEXT_PUBLIC_ORY_SDK_URL=https://practical-swirles-whg26u2ofh.projects.oryapis.com

ory tunnel --dev --project practical-swirles-whg26u2ofh \
 http://localhost:3000

## Development

> Some things like OIDC and Passwordless don't work locally. You probably also
> have to remove `router.push(basePath + "/ui/login");` from `useAuth.tsx` to
> not get redirected. Use local for CSS or layout and test other features on the
> Staging domain.

Run the development server:

```bash
export NEXT_PUBLIC_ORY_SDK_URL=https://wonderful-gauss-otwhn7get8.projects.oryapis.com/
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.tsx`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Webhooks Guide

Edit the `ory-identity-config.json-$project_name` to add the webhook you want &
update configuration on production with the steps above.
[Base64 encode](https://www.base64encode.org/) the data you want to capture:

```js
function(ctx) {
properties: {
   email: ctx.identity.traits.email,
   name: ctx.identity.traits.name,
   },
}
```

Supabase Webhook:

```js
function(ctx) {
  id: ctx.identity.id,
  created_at: ctx.identity.created_at,
  name: ctx.identity.traits.name,
}
```

## Setup

### Importing Identities

Assumptions:

1. You cloned the repository and cd'd inside it.
2. You have the [Ory CLI](https://www.ory.sh/docs/guides/cli/installation) and
   [jq](https://stedolan.github.io/jq/download/) installed.
3. You adjusted the parameters in `setup/manage_ids.sh`. Per default a new Ory
   project will be created and all 100 identities from the `setup/fake_emails`
   list will be used.

```shell
sh scripts/setup/manage_ids.sh
```

With n=100 it should take 1-2 minutes to complete. By then your output should
look like this:

```shell
Using existing project with ID .....
Imported 100/100 identities.
Verified that all identities got created.
```
