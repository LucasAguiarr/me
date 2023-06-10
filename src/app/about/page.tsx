import PageHeader from '@/components/page-header';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title={['About Lucas']}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit"
      />

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <Image
          alt="Lucas"
          src="https://picsum.photos/1000/1000"
          width="1000"
          height="1000"
          className="rounded-md aspect-video w-full max-h-96"
        />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          accusamus laborum eaque ut repellendus harum dicta voluptatibus sequi
          natus corporis hic nulla modi molestiae reprehenderit, soluta debitis
          illo, voluptatum, provident exercitationem beatae numquam ad iusto
          labore itaque. Earum, eligendi alias.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          quis beatae ea eius ipsum voluptates aspernatur esse recusandae nobis
          quo enim animi quasi necessitatibus sequi, pariatur omnis nemo
          explicabo quod. Deserunt magni similique, perspiciatis modi magnam et,
          sunt debitis expedita nam cupiditate reprehenderit iusto quisquam
          exercitationem adipisci laboriosam cumque praesentium nostrum hic,
          saepe error sequi in enim tempore. Dolore, beatae.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta
          at dolorum distinctio odit neque reiciendis ab sit id qui. Corrupti
          deserunt, repellendus libero fuga facilis dolor placeat repudiandae
          repellat.
        </p>
      </div>
    </div>
  );
}
