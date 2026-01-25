import { GradientBackground } from "@/components/GradientBackground";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex justify-center">
      <GradientBackground variant="about" />
      <div className="w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}
