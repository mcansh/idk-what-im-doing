import type { HeadingType } from "~/components/heading";
import { Heading } from "~/components/heading";

let headings = Array.from({ length: 6 }).map((_, i) => {
  return i + 1;
});

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {headings.map((i) => {
        return (
          <Heading key={i} type={("h" + i) as HeadingType}>
            Welcome to Remix {i}
          </Heading>
        );
      })}
    </div>
  );
}
