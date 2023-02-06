type EntryHeader = {
  entity: string;
  entityHref?: string;
  location: string;
  positionType: string;
  positionPeriod: string;
};

export default function ResumeEntryHeader({ entity, entityHref, location, positionType, positionPeriod }: EntryHeader) {
  return (
    <>
      <div className="sm:flex items-stretch text-base sm:text-xl md:text-2xl font-bold border-b-2 border-gray-500 pb-2 text-blue-600 dark:text-blue-200">
        <a href={entityHref} rel="noopener noreferrer" target="_blank" className="flex-grow hover:animate-text-pulse">
          {entity}
        </a>
        <p className="italic">{location}</p>
      </div>

      <div className="sm:flex items-stretch text-base sm:text-xl md:text-2xl font-semibold py-2">
        <p className="flex-grow">{positionType}</p>
        <p className="italic">{positionPeriod}</p>
      </div>
    </>
  );
}
