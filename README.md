# Assignment 2 - Component paradigm

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Setup a development server by running:
```bash
npm install
```

Run the development server by:

```bash
npm run dev
# or
yarn dev
```

If there is no error, you are good to go!

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Instructions

On the homepage `localhost:3000`, there are cards containing cute cats along with their authors.

1. Add the text `By` in front of each author name.

    Hint: See `components/CatCard.tsx`

2. (Optional) Add a new page which should be accessed on `/stat`.

    Hint: https://nextjs.org/docs/routing/introduction

3. (Optional) Add a button (or hyperlink)  on the homepage. The button should redirect to the stat page.

4. (Optional) On the stat page, add a table which shows all of the distinct authors.

    The following link may be useful: https://ant.design/components/table

5. (Optional) Table in (4) should show the authors sorted by uploaded count in descending order.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
