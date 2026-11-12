export type Job = {
  /** YYYY-MM, shown as the commit date */
  start: string
  role: string
  company: string
  /** File name shown on the stack pane when this job is selected */
  slug: string
  /** Stack used in this job, from the CV bullets */
  stack: [string, string][]
}

/** Newest first. */
export const jobs: Job[] = [
  {
    start: '2023-08',
    role: 'Software Developer',
    company: 'Ozbul Bilişim',
    slug: 'ozbul-bilisim',
    stack: [
      ['languages', 'C#, TypeScript, JavaScript, Dart'],
      ['web', 'React, Next.js'],
      ['mobile', 'Flutter, React Native'],
      ['backend', 'ASP.NET, microservices, SOAP'],
      ['data', 'MSSQL'],
      ['tools', 'Azure DevOps'],
      ['also', 'Browser extension (TypeScript)'],
    ],
  },
  {
    start: '2022-10',
    role: 'Lab Teaching Assistant',
    company: 'European University of Lefke',
    slug: 'eul-teaching-assistant',
    stack: [
      ['languages', 'C, C++, SQL'],
      ['topics', 'Data structures, databases'],
    ],
  },
  {
    start: '2022-07',
    role: 'Intern Flutter Developer',
    company: 'Gigabyte Limited',
    slug: 'gigabyte',
    stack: [
      ['languages', 'Dart'],
      ['mobile', 'Flutter'],
      ['tools', 'GitHub'],
    ],
  },
  {
    start: '2022-04',
    role: 'Lab Assistant',
    company: 'European University of Lefke',
    slug: 'eul-lab-assistant',
    stack: [['languages', 'C, C++']],
  },
]

/** Full stack, grouped as on the CV. Shown when no job is selected. */
export const stack: [string, string][] = [
  ['languages', 'C#, Dart, TypeScript, JavaScript, C/C++, SQL'],
  ['mobile', 'Flutter, React Native'],
  ['web', 'React, Next.js'],
  ['backend', 'ASP.NET, NestJS, Node.js, Express'],
  ['data', 'MSSQL, MongoDB, MySQL'],
  ['tools', 'Git, Azure, Jira, Agile'],
]
