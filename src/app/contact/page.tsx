import ContactForm from '@/components/contact-form';
import PageHeader from '@/components/page-header';
import { contact } from '@/config/contact';

export default function ContactPage() {
  const { title, description } = contact;
  return (
    <div>
      <PageHeader title={[title]} description={description} />

      <div className="mb-10 mt-16 flex flex-col gap-4">
        <ContactForm />
      </div>
    </div>
  );
}
