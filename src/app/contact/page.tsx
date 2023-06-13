import ContactForm from '@/components/contact-form';
import PageHeader from '@/components/page-header';
import { contact } from '@/config/contact';

export default function ContactPage() {
  const { title, description } = contact;
  return (
    <div>
      <PageHeader title={[title]} description={description} />

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <ContactForm />
      </div>
    </div>
  );
}
