
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const weeks = [
  {
    uge: 1,
    fokus: "Førsteberøring & kontrol",
    opvarmning: "1-2-3 stop leg",
    teknik: "First Touch",
    spil: "Afslutning efter pasning",
  },
  {
    uge: 2,
    fokus: "Pasninger & samarbejde",
    opvarmning: "Fangeleg m. bold",
    teknik: "Pasning i firkant",
    spil: "Mini soccer 1v1",
  },
  {
    uge: 3,
    fokus: "Dribling & vendinger",
    opvarmning: "Kaosbold",
    teknik: "Zig zag + Messi vending",
    spil: "1v1 med afslutning",
  },
  {
    uge: 4,
    fokus: "Afslutningsteknik",
    opvarmning: "Keglemål 2-mand",
    teknik: "Skud med første berøring",
    spil: "Kamp med varianter (1 berøring)",
  },
  {
    uge: 5,
    fokus: "Overblik & beslutninger",
    opvarmning: "AGF kaos hjernegymnastik",
    teknik: "Southampton (5 mod 3)",
    spil: "Spil til højre/forsvar til venstre",
  },
  {
    uge: 6,
    fokus: "Tempo & intensitet",
    opvarmning: "Interval m. bold",
    teknik: "A la bold",
    spil: "2v2 overtalspil",
  },
  {
    uge: 7,
    fokus: "Koordination & balance",
    opvarmning: "Drible-fangeleg",
    teknik: "Teknikbane m. vendinger",
    spil: "Afslutning efter dribling",
  },
  {
    uge: 8,
    fokus: "Repetition & kampforståelse",
    opvarmning: "Valgfri leg",
    teknik: "Rondo 4v1",
    spil: "Kamp med regler (alle skal røre)",
  }
];

export default function TrainingPlanner() {
  const [selectedWeek, setSelectedWeek] = useState(null);

  return (
    <>
      <Head>
        <title>Stavtrup IF Træningsplan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ugeplan for fodboldtræning - U9 til U11, Stavtrup IF" />
      </Head>
      <div className="p-4 space-y-4 max-w-md mx-auto">
        <div className="flex justify-center">
          <Image src="/stavtrup-logo.png" alt="Stavtrup IF Logo" width={100} height={100} />
        </div>
        <h1 className="text-2xl font-bold text-center text-[#007749]">Stavtrup IF U9-U11 Træningsplan</h1>
        <div className="grid grid-cols-2 gap-2">
          {weeks.map((week) => (
            <Button key={week.uge} onClick={() => setSelectedWeek(week)} className="bg-[#007749] hover:bg-[#005f36]">
              Uge {week.uge}
            </Button>
          ))}
        </div>

        {selectedWeek && (
          <Card className="mt-4 border border-[#007749]">
            <CardContent className="space-y-2 p-4">
              <h2 className="text-xl font-semibold text-[#007749]">Uge {selectedWeek.uge}</h2>
              <p><strong>Fokus:</strong> {selectedWeek.fokus}</p>
              <p><strong>Opvarmning:</strong> {selectedWeek.opvarmning}</p>
              <p><strong>Teknik:</strong> {selectedWeek.teknik}</p>
              <p><strong>Spil/afslutning:</strong> {selectedWeek.spil}</p>
              <Button onClick={() => setSelectedWeek(null)} variant="outline">Tilbage</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
