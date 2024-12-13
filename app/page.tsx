import EditalCard from "@/components/card-edital";
import MainSection from "@/components/common/main-section";
import SobreNos from "@/components/common/sobre";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <MainSection />
      <EditalCard />
      <SobreNos />
      </main>
    </div>
  );
}
