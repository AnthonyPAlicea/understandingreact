import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main style={{fontFamily: 'sans-serif'}}>
      <header>
        <h1>Courses by Tony Alicea</h1>
      </header>
    </main>
  );
}
