export async function SendEmail(data: SendEmail) {
  const { from, to, subject, html } = data;
  console.log('Sending email', data);
  await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify({ from, to, subject, html }),
  });
}
