import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/openprinting.github.io" : "";

const softwareCards = [
  {
    title: "Driverless Printers",
    description: "Most modern printers work out of the box with OpenPrinting software.",
    image: `${basePath}/ipp-everywhere.png`,
  },
  {
    title: "Legacy Printers",
    description: "Browse compatibility information for printers supported by free software drivers.",
    image: `${basePath}/printer.png`,
  },
  {
    title: "Windows?!",
    description: "Our Printer Applications can revive older printers under current Windows via WSL.",
    image: `${basePath}/wsl-printing-icon.png`,
  },
];

const projectCards = [
  {
    title: "Printer Working Group",
    description: "OpenPrinting collaborates with the PWG Internet Printing Protocol workgroup.",
    image: `${basePath}/pwg.png`,
  },
  {
    title: "GSoC - OpenPrinting",
    description: "OpenPrinting participates in Google Summer of Code via The Linux Foundation.",
    image: `${basePath}/gsoc.jpeg`,
  },
  {
    title: "GSoD - OpenPrinting",
    description: "OpenPrinting contributes to Google Season of Docs through The Linux Foundation.",
    image: `${basePath}/gsod.jpg`,
  },
];

function Card({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <article className="rounded-md border border-gray-800 bg-gray-950 p-5">
      <div className="mb-4 rounded border border-gray-800 bg-white p-2">
        <Image src={image} alt={title} width={300} height={180} className="h-32 w-full object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-gray-300">{description}</p>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="bg-black py-16 text-white" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-3 max-w-3xl text-sm text-gray-400">
          OpenPrinting software supports both modern driverless printing and legacy printer workflows.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {softwareCards.map((card) => (
            <Card key={card.title} title={card.title} description={card.description} image={card.image} />
          ))}
        </div>

        <h3 className="mt-12 text-xl font-semibold">Collaborations</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projectCards.map((card) => (
            <Card key={card.title} title={card.title} description={card.description} image={card.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
