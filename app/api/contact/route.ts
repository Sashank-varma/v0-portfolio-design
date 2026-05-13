import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Check if Resend API key is available
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('[v0] RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    // Import Resend dynamically
    const { Resend } = await import('resend');
    const resend = new Resend(resendApiKey);

    // Get your email from environment variable
    const ownerEmail = process.env.OWNER_EMAIL || 'owner@example.com';
    
    // Send email to owner
    const ownerEmailResult = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update this to your verified domain
      to: ownerEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            You can reply directly to ${email}
          </p>
        </div>
      `,
    });

    if (ownerEmailResult.error) {
      console.error('[v0] Failed to send owner email:', ownerEmailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Send confirmation email to the visitor
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: email,
      subject: 'Message Received - Thank You!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Message</h2>
          <p>Hi ${name},</p>
          <p>We received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-wrap; color: #666;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Best regards,<br/>
            Portfolio Team
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
