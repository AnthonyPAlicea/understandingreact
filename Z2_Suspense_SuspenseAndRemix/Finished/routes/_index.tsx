import { useLoaderData, Await } from '@remix-run/react';
import { defer } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { Suspense } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const timeout = (ms) => new Promise((res) => setTimeout(res, ms));

export function loader() {
  return defer({
    courses: timeout(2000).then(() => ["Understanding React", "Understanding HTML and CSS", "JavaScript: Understanding the Weird Parts"]),
  });
}

export default function Index() {
  const { courses } = useLoaderData();
  return (
    <main style={{fontFamily: 'sans-serif'}}>
      <header>
        <h1>Courses by Tony Alicea</h1>
      </header>
      <Suspense fallback={<ul><li>Loading courses...</li></ul>}>
        <Await resolve={courses}>
          {(crs) => <ul>{crs.map((c, index) => <li key={index}>{c}</li>)}</ul>}
        </Await>
      </Suspense>
    </main>
  );
}
