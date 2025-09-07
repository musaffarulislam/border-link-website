// components/BlogSection.tsx
import Link from "next/link";

const blogPosts = [
  {
    title: "How to Clear Customs at the Hatta Border",
    description:
      "Step-by-step guide to efficiently clear your shipments at Hatta border without delays.",
    url: "/blog/hatta-customs-clearance",
  },
  {
    title: "Dubai Municipality Approval Guide",
    description:
      "Learn how to get your products approved by Dubai Municipality quickly and compliantly.",
    url: "/blog/dubai-municipality-approval",
  },
  {
    title: "Common Mistakes in Customs Documentation",
    description:
      "Avoid common pitfalls when submitting customs paperwork for imports in UAE.",
    url: "/blog/common-customs-mistakes",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-12 text-center">
          Blog & Resources
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              href={post.url}
              className="block rounded-lg bg-white text-primary p-6 shadow-lg  transition"
            >
              <h3 className="text-xl font-semibold font-poppins mb-2">
                {post.title}
              </h3>
              <p className=" font-inter">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
