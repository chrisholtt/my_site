import { GradientBackground } from "@/components/GradientBackground";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex justify-center">
      <GradientBackground variant="home" />
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
