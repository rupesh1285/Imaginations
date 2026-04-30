import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
  if (!WEBHOOK_SECRET) {
    return new Response('Missing WEBHOOK_SECRET', { status: 500 })
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload);
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying', { status: 400 })
  }

  if (evt.type === 'user.created') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;
    
    try {
      await prisma.user.upsert({
  where: { clerkId: id },
  update: {}, // do nothing if already exists
  create: {
    clerkId: id,
    email: email_addresses[0].email_address,
    name: `${first_name || ''} ${last_name || ''}`.trim(),
    imageUrl: image_url,
  }
})
      console.log(`✅ User ${id} successfully saved to database!`)
    } catch (error) {
      console.error('Database Error:', error)
      return new Response('Error saving to database', { status: 500 })
    }
  }

  return new Response('Webhook received', { status: 200 })
}