import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery",
  description: "Delivery Delivery Delivery",
};

export default function Delivery() {
  return (
    <>
      <h1>Delivery</h1>
      <Link href='/'>На главную</Link>
    </>
  );
}
