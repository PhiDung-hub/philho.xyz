const description = 'This is Phil Ho project gallery, where I show case my expriments';
export const metadata = {
  title: 'Projects',
  description,
};

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default ProjectLayout;
