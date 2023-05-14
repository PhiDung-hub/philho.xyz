const description = 'This is Phil Ho project gallery, where I show case my expriments';
export const metadata = {
  title: 'Projects',
  description,
  openGraph: {
    type: 'website',
    title: 'Projects | Phil Ho',
    description,
    siteName: 'PhilHo.xyz',
    url: 'https://philho.xyz',
    images: [
      {
        url: 'https://philho.xyz/og/projects.webp',
        alt: 'Phil Ho project gallery',
        width: 1200,
        height: 1200,
        type: 'image/png',
      },
    ],
  },
};

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default ProjectLayout;
