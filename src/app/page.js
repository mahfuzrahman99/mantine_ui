import Image from "next/image";
import { Button } from '@mantine/core';
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>This is home page</h1>
      
      <Button component={Link} href={`/about`}>
        About Page
      </Button>
    </main>
  );
}
