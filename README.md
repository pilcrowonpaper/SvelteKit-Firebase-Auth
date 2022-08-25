**This repo is now archived. At the end of the day, Firebase is NOT built for SSR sites. Check out [Lucia](https://github.com/pilcrowOnPaper/lucia-sveltekit) or [Supabase Auth Helpers](https://github.com/supabase/auth-helpers/tree/main/packages/sveltekit) for a better experience, both for the developer and user**

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## TODO
1. Add firebaes config in `src/lib/firebase.js`
2. Add private key
3. import private key in `src/lib/firebase-admin.js`

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
