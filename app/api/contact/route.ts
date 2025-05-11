export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;
  console.log('Contact Form Submission:', { name, email, message });
  return new Response(JSON.stringify({ success: true, message: 'Form submitted!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

