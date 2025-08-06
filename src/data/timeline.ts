export interface TimelineEntry {
  start: string;
  end: string;
  title: string;
  company: string;
  logo: string;
  description: string;
}

export const getTimelineData = (): TimelineEntry[] => [
  {
    start: '2025',
    end: 'Present',
    title: 'Software Development Engineer',
    company: 'Elekta',
    logo: '/elekta.png',
    description: 'Develop, maintain and test Elekta MOSAIQ oncology information systems using C++, C# and .NET, ensuring reliability and usability in clinical settings. Maintain rigorous documentation standards required for medical software development.'
  },
  {
    start: '2023',
    end: '2025',
    title: 'Software Engineer',
    company: 'CK Technologies Inc.',
    logo: '/ckt.png',
    description: 'Maintained and updated C# and C++ desktop applications. Developed custom testing libraries and transitioned aerospace applications from Windows-based embedded systems to embedded C++ on Linux platforms.'
  },
  {
    start: '2019',
    end: '2023',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of California - Santa Cruz',
    logo: '/ucsc.jpg',
    description: 'Earned degree in Computer Science with focus on software engineering, algorithms, and full-stack web development.'
  }
];