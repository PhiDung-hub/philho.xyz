import { SectionContainer } from '~/components';

export default function Blog() {
  return (
    <SectionContainer className="h-screen font-mono text-xl md:text-2xl animate-text-bounce flex flex-col items-center justify-center">
      <img
        src="https://readme-typing-svg.herokuapp.com?
        font=Fira+Code&weight=500&size=24&duration=4000&pause=1000&color=F75B00&center=true&vCenter=true&multiline=true&width=800&lines=Blogs+will+be+uploaded+soon.+Please%2C+comeback+later."
        alt="Typing SVG"
      />
    </SectionContainer>
  );
}
