import Link from 'next/link';

export default function home() {
  return (
    <div>
      <h1>Welcome Raju Next Home page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
