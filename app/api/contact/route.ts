import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Configure your email address here
const RECIPIENT_EMAIL = 'launchdigitalworks@gmail.com'; // Change this to your email

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !company || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailBody = `
New contact form submission received:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company}
Project Type: ${projectType}
Budget Range: ${budget}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Log for debugging
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('To:', RECIPIENT_EMAIL);
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);
    console.log('==============================');

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server misconfigured: missing RESEND_API_KEY' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Launch Digital Works <onboarding@resend.dev>',
      to: RECIPIENT_EMAIL,
      subject: emailSubject,
      text: emailBody,
      replyTo: email,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. We will get back to you soon!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
