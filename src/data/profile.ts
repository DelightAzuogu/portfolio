export const profile = {
  name: "Delight Ikechukwu Azuogu",
  session: "delight",
  host: "delight@portfolio",
  /** Google Docs PDF export of the CV in Drive. Upload new versions to the same file to keep this link. */
  cvUrl:
    "https://docs.google.com/document/d/1b0wtaRgQ7R9Sz52u_q7y0x0Zj_p5d1Nf/export?format=pdf",
  lead: "Software developer building across mobile, web and backend with Flutter, React, NestJS and ASP.NET.",
  neofetch: [
    ["role", "Software Developer"],
    ["current company", "Ozbul Bilişim"],
    ["since", "Aug 2023"],
    ["msc", "Information Technology, Cyprus International University"],
    ["bsc", "Computer Engineering, European University of Lefke"],
    ["focus", "Mobile, web, backend"],
    ["langs", "C#, Dart, JavaScript, TypeScript"],
    ["speaker", "7th and 8th Digital Global Future Conference"],
    ["runs", "2 half marathons"],
  ],
} as const;

/** Tmux windows. `key` is the digit that jumps to the section with this `id`. */
export const windows = [
  { key: 0, id: "home" },
  { key: 1, id: "projects" },
  { key: 2, id: "work" },
  { key: 3, id: "thesis" },
  { key: 4, id: "talks" },
  { key: 5, id: "runs" },
  { key: 6, id: "contact" },
] as const;
