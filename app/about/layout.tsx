import { GradientBackground } from "@/components/GradientBackground";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex justify-center">
      <GradientBackground variant="about" />
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
