import "./page.scss";
import SectionOne from "@/modules/home/SectionOne/SectionOne";
import StructureData from "@/components/SEO/StructureData/StructureData";

export default function Home() {
  return (
    <main id="home">
      <StructureData id={2} />
      <SectionOne />
    </main>
  );
}
