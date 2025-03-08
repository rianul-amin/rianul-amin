import FirstSection from "@/components/LandingPage/FirstSection";

export default function Home() {
  return (
    <div className="h-[calc(100vh-60px)] overflow-y-auto grid gap-[5px]">
      <FirstSection></FirstSection>
      <FirstSection></FirstSection>
      <FirstSection></FirstSection>
      <FirstSection></FirstSection>
    </div>
  );
}
