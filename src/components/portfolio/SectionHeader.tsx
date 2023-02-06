export default function ResumeSectionHeader({ sectionTitle }: { sectionTitle: string }) {
  return (
    <div className="pb-8 xl:pb-12">
      <p className="text-3xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">{sectionTitle}</p>
    </div>
  );
}
