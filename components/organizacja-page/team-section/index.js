import TeamMember from "../team-member";

export const TeamSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
        <TeamMember
          name="Maciej Sosnowski"
          role="Prezes zarządu"
          img="/msosnowski.jpg"
        >
          Zasiada w zarządzie od 2021 roku, wcześniej pełnił funkcję członka
          Komisji Rewizyjnej PTSPS. Jest pracownikiem socjalnym, pedagogiem,
          mediatorem, trenerem pracy, trenerem organizacji pozarządowych,
          metodykiem i superwizorem pracy socjalnej. Jest autorem publikacji z
          obszaru superwizji pracy socjalnej i aktywizacji zawodowej osób
          wykluczonych.
        </TeamMember>
        <TeamMember
          name="Marek Lasota"
          role="Członek zarządu"
          img="/mlasota.jpg"
        >
          Zasiada w zarządzie od 2020 roku. Jest pracownikiem socjalnym,
          psychoterapeutą psychodynamicznym i superwizorem pracy socjalnej.
        </TeamMember>
        <TeamMember name="Marek Jaros" role="Członek zarządu" img="/mjaros.jpg">
          Założyciel PTSPS, członek pierwszego zarządu. Członek zarządu od 2020
          roku. Jest psychologiem, psychoterapeutą i superwizorem pracy
          socjalnej. Zarządzał pierwszym projektem Towarzystwa realizowanym we
          współpracy z UNICEF (2022/2024). Jest redaktorem kwartalnika
          Superwizja Pracy Socjalnej.
        </TeamMember>
      </div>
    </div>
  );
};
