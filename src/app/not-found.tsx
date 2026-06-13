import NotFoundClient from "@/components/common/NotFoundClient";

export const metadata = {
  title: "404 – Page Not Found | Border Link",
  description: "The page you are looking for doesn't exist. Visit Border Link for customs clearance and logistics services in Dubai and the UAE.",
  alternates: { canonical: "https://borderlink.info/404" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundClient />;
}
