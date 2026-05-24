import { notFound } from "next/navigation";
// TODO Sprint 3 · CMS integration (Sanity · Contentlayer · MDX)
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  notFound();
}
