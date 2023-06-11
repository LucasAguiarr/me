import PageHeader from '@/components/page-header';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title={['About Lucas']}
        description="Dedicated full stack developer with a passion for innovation."
      />

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <Image
          alt="Lucas"
          src="/images/about.jpg"
          width="1200"
          height="1200"
          className="rounded-md aspect-video w-full max-h-96 object-cover hover:scale-105 transition-all duration-300"
        />

        <p>
          My name is Lucas and I'm a 26-year-old full stack developer based in
          Florianópolis, Brazil. I currently work at Khomp, where I contribute
          to the development of innovative solutions. With expertise in both
          front-end and back-end development, I strive to create comprehensive
          and efficient applications. I am passionate about programming and
          committed to delivering high-quality results. Join me on this journey
          as I continue to grow and excel in my career as a full stack
          developer.
        </p>
      </div>
    </div>
  );
}
