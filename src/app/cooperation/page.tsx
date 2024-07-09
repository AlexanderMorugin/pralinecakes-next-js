import Link from 'next/link';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contacts",
  description: "Contacts Contacts Contacts",
};

export default function Cooperation() {
  return (
    <>
      <h1>Cooperation</h1>
      <Link href='/'>На главную</Link>
    </>
  );
}
