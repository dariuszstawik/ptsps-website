import PageHeader from "@/components/global-components/page-header";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import { Mail, MapPin, Phone, User } from "lucide-react";

export default function Kontakt() {
  return (
    <div>
      <PageHeader>Kontakt</PageHeader>
      <ParagraphWithImageOnTheLeft title="Kontakt" img="kontakt.jpg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <strong>Biuro</strong>
            <div className="flex gap-2">
              <Mail className="text-primaryBlue" /> biuro@ptsps.pl
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <strong>Adres do korespondencji tradycyjnej</strong>
            <div className="flex gap-2 items-center">
              <MapPin className="text-primaryBlue" />
              <div className="">
                <span className="block">
                  Polskie Towarzystwo Superwizji Pracy Socjalnej
                </span>
                <span className="block">
                  00-001 Warszawa, Skrytka Pocztowa nr 180
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <strong>Zarząd</strong>
            <div>
              <div className="flex gap-2">
                <User className="text-primaryBlue" /> Maciej Sosnowski
              </div>
              <div className="flex gap-2">
                <Mail className="text-primaryBlue" /> maciej.sosnowski@ptsps.pl
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <User className="text-primaryBlue" /> Marek jaros
              </div>
              <div className="flex gap-2">
                <Mail className="text-primaryBlue" /> marek.jaros@ptsps.pl
                <Phone className="text-primaryBlue" /> +48 500 273 018
              </div>
            </div>
          </div>
        </div>
      </ParagraphWithImageOnTheLeft>
    </div>
  );
}
