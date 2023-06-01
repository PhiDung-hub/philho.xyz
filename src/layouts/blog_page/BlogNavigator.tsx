import { allBlogPosts, type BlogPost } from 'contentlayer/generated';
import { CustomLink } from '~/components';
import { clsxTailwindMerge } from '~/utils';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

type BlogNavigatorProps = {
  activeSlug: string;
  wrapperClassname?: string;
  inverseDisplay?: boolean;
};

const previousIcon = <BiSkipPrevious size={32} className="inline mb-[2.5px]" viewBox="6 0 24 24" />;
const nextIcon = <BiSkipNext size={32} className="inline mb-[2.5px]" viewBox="-6 -1 24 24" />;

export default function BlogNavigator({ inverseDisplay = false, ...props }: BlogNavigatorProps) {
  const [nextPost, previousPost] = findNextAndPreviousPost(props.activeSlug);

  return (
    <div className={clsxTailwindMerge('mt-8 grid grid-cols-2 text-lg', props.wrapperClassname)}>
      {previousPost ? (
        <>
          <div className="hidden md:flex justify-start">
            <CustomLink href={previousPost.href} wrapperClassname="hover:no-underline hover:animate-text-pulse">
              {inverseDisplay ? (
                <>
                  <p className="text-3xl">{previousPost.title}</p>
                  <div className="mb-2 text-2xl font-semibold">
                    {previousIcon}
                    Previous
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-2 text-2xl font-semibold">
                    {previousIcon}
                    Previous
                  </div>
                  <p className="text-3xl">{previousPost.title}</p>
                </>
              )}
            </CustomLink>
          </div>

          <div className="md:hidden flex justify-start items-start">
            <CustomLink href={previousPost.href} wrapperClassname="mb-2 text-3xl font-semibold">
              {previousIcon}
              Previous
            </CustomLink>
          </div>
        </>
      ) : (
        <div>{/*Empty div to be placed in 1st column*/}</div>
      )}

      {nextPost && (
        <>
          <div className="hidden md:flex justify-end">
            <CustomLink href={nextPost.href} wrapperClassname="hover:no-underline hover:animate-text-pulse">
              {inverseDisplay ? (
                <>
                  <p className="text-3xl">{nextPost.title}</p>
                  <div className="flex justify-end mb-2 text-2xl font-semibold">
                    Next
                    {nextIcon}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-end mb-2 text-2xl font-semibold">
                    Next
                    {nextIcon}
                  </div>
                  <p className="text-3xl">{nextPost.title}</p>
                </>
              )}
            </CustomLink>
          </div>

          <div className="md:hidden flex justify-end">
            <CustomLink href={nextPost.href} wrapperClassname="mb-2 text-3xl font-semibold">
              Next
              {nextIcon}
            </CustomLink>
          </div>
        </>
      )}
    </div>
  );
}

function findNextAndPreviousPost(slug: string) {
  const navigationInfo = allBlogPosts.map((post: BlogPost) => {
    return {
      slug: post.slug,
      href: `/blog/${post.slug}`,
      title: post.title,
    };
  });

  navigationInfo.sort((postA, postB) => {
    return postA.slug > postB.slug ? -1 : 1;
  });

  const thisIndex = navigationInfo.findIndex((post) => {
    return slug === post.slug;
  });

  const previousPost = thisIndex - 1 < 0 ? null : navigationInfo[thisIndex - 1];
  const nextPost = thisIndex + 1 >= navigationInfo.length ? null : navigationInfo[thisIndex + 1];

  return [previousPost, nextPost];
}
