'use client';

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
type Props = {};

export default function ContactForm({}: Props) {
  return (
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
            <Input id="name" placeholder="Type your name" />
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <Label htmlFor="email">Emil</Label>
            <Input id="email" placeholder="Type your email" />
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  );
}
