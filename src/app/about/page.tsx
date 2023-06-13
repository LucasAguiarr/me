import PageHeader from '@/components/page-header';
import { about } from '@/config/about';
import Image from 'next/image';

export default function AboutPage() {
  const { title, description, contents } = about;
  return (
    <div>
      <PageHeader title={[title]} description={description} />

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <Image
          alt="Lucas"
          src="/images/about.jpg"
          width="1200"
          height="1200"
          className="rounded-md aspect-video w-full max-h-96 object-cover hover:scale-105 transition-all duration-300"
        />

        {contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
}
