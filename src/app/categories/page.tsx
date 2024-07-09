import Link from 'next/link';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contacts",
  description: "Contacts Contacts Contacts",
};

export default function Categories() {
  return (
    <>
      <h1>Categories</h1>
      <Link href='/'>На главную</Link>
    </>
  );
}
