import ContactForm from '@/components/contact-form';
import PageHeader from '@/components/page-header';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title={['Contact']}
        description="I’m always looking to collaborate on interesting projects with great people. Need a supportive hand? I have two!"
      />

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <ContactForm />
      </div>
    </div>
  );
}
