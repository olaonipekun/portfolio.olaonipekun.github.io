import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello World" },
    { name: "description", content: "Welcome to Remix, folks!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1> Hello World </h1>
    </div>
  );
}
