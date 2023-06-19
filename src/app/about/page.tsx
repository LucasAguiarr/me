import PageHeader from '@/components/page-header';
import { about } from '@/config/about';
import Image from 'next/image';

export default function AboutPage() {
  const { title, description, contents } = about;
  return (
    <div>
      <PageHeader title={[title]} description={description} />

      <div className="mb-10 mt-16 flex flex-col gap-4   ">
        <Image
          alt="Lucas"
          src="/images/about.jpg"
          width="1200"
          height="1200"
          className="aspect-video max-h-96 w-full rounded-md object-cover transition-all duration-300 hover:scale-105"
        />

        {contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
}
