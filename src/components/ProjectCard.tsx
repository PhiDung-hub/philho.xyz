import { Image } from '~/components';

type CardType = {
  previewImageHref: string;
  openGraphHref: string;
  header: string;
  desc?: string;
  className?: string;
};

export default function ProjectCard({ previewImageHref, openGraphHref, header, desc, className }: CardType) {
  return (
    <a
      href={previewImageHref}
      rel="noreferrer external"
      target="_blank"
      className={`group my-4 md:my-0 mx-auto w-[280px] md:w-[350px] bg-blue-200 dark:bg-gray-600 rounded-md 
        shadow-md shadow-sky-500 dark:shadow-sky-200 hover:scale-[1.02] ${className}`}
    >
      <Image src={openGraphHref} alt="E-cycle Open Graph Image" width={350} height={200} className="rounded-t-md" />
      {/* <NextImage src={openGraphHref} alt="E-cycle Open Graph Image" width={350} height={200} className="rounded-t-md" /> */}
      <div className="py-2 px-4">
        <p className="text-lg text-center font-semibold text-blue-700 dark:text-blue-200 group-hover:animate-text-pulse">{header}</p>
        <p className="text-center w-full">{desc}</p>
      </div>
    </a>
  );
}
