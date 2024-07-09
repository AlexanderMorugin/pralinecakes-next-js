import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About About About",
};

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href='/'>На главную</Link>
    </>
  );
}
