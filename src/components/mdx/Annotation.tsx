const Annotation = ({ caption }: { caption: string }) => {
  return <div className="w-full mb-2 md:text-lg text-center italic font-semibold">{caption}</div>;
};

export default Annotation;
