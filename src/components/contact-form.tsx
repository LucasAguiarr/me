'use client';
import { FormEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/config/site';
import { sendEmail } from '@/hooks/use-send-email';

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    const data = {
      me: siteConfig.author.email,
      name,
      email,
      message,
    };
    try {
      await sendEmail(data);
      resetForm();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsSending(false);
    }
  }

  function resetForm() {
    setName('');
    setEmail('');
    setMessage('');
  }

  function handleNameChange(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }

  function handleEmailChange(e: FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handleMessageChange(e: FormEvent<HTMLTextAreaElement>) {
    setMessage(e.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Send a message</CardTitle>
          <CardDescription>
            I'm always open to discuss new projects, creative ideas or
            opportunities to be part of your visions.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col flex-1 gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Type your name"
                onChange={handleNameChange}
              />
            </div>

            <div className="flex flex-col flex-1 gap-2">
              <Label htmlFor="email">Emil</Label>
              <Input
                id="email"
                placeholder="Type your email"
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              onChange={handleMessageChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isSending ? 'Sending...' : 'Submit'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
