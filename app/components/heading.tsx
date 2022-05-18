import styles from "./heading.module.css";

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function Heading({
  type: Type,
  children,
}: {
  type: HeadingType;
  children: React.ReactNode;
}) {
  return <Type className={styles.base}>{children}</Type>;
}
