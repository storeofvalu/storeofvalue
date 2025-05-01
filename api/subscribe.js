// api/subscribe.js
export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  // Get form data from request body
  const { name, email, interests } = req.body;
  
  // Basic validation
  if (!email || !name) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // Here you would typically:
  // 1. Store in a database
  // 2. Add to an email service like Mailchimp
  // 3. Send a confirmation email
  
  // For now, just log the submission (this will appear in Vercel logs)
  console.log('Community Signup:', { name, email, interests, date: new Date().toISOString() });
  
  // You could save to a simple database or append to a file in production
  // For example with Vercel KV (key-value storage) or other database:
  /*
  try {
    await kv.hmset(`subscriber:${Date.now()}`, {
      name,
      email,
      interests,
      date: new Date().toISOString()
    });
  } catch (err) {
    console.error('Failed to store subscriber:', err);
    return res.status(500).json({ error: 'Failed to store data' });
  }
  */
  
  // Return success response
  return res.status(200).json({ 
    success: true, 
    message: 'Thank you for joining our community!' 
  });
} 