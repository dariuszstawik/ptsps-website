import PageHeader from "@/components/global-components/page-header";
import SectionTitle from "@/components/global-components/section-title";
import { TeamSection } from "@/components/organizacja-page/team-section";

export default function LudzieOrganiacji() {
  return (
    <div>
      <PageHeader>Organizacja</PageHeader>
      <SectionTitle>Ludzie organizacji</SectionTitle>
      <TeamSection />
    </div>
  );
}
