import { GradientBackground } from "@/components/GradientBackground";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex justify-center">
      <GradientBackground variant="home" />
      <div className="w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}
