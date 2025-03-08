import FirstSection from "@/components/LandingPage/FirstSection";

export default function Home() {
  return (
    <div className="lg:h-[calc(100vh-60px)] h-[calc(100vh-160px)] w-full overflow-y-auto grid gap-[5px]">
      <FirstSection></FirstSection>
      <FirstSection></FirstSection>
      <FirstSection></FirstSection>
      <FirstSection></FirstSection>
    </div>
  );
}
