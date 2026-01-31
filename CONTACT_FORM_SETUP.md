# Contact Form Email Setup Guide

## Current Status

The contact form is now connected to an API endpoint (`/app/api/contact/route.ts`), but **email sending is not yet configured**. Form submissions are currently logged to the console.

## Where You'll Receive Responses

**Configured Email Address:** `hello@launchdigitalworks.com` (set in `/app/api/contact/route.ts`)

You can change this by editing line 4 in `/app/api/contact/route.ts`:
```typescript
const RECIPIENT_EMAIL = 'your-email@example.com'; // Change this
```

## How to Set Up Email Sending

You have several options to receive form submissions via email:

### Option 1: Resend (Recommended - Easy Setup)

1. **Sign up for Resend**: https://resend.com
2. **Get your API key** from the Resend dashboard
3. **Install Resend**:
   ```bash
   npm install resend
   ```
4. **Add environment variable**:
   Create a `.env.local` file in the root directory:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
5. **Update the API route** (`/app/api/contact/route.ts`):
   - Uncomment the Resend code (lines 50-57)
   - Update the `from` email address to your verified domain

### Option 2: SendGrid

1. **Sign up for SendGrid**: https://sendgrid.com
2. **Get your API key** from SendGrid dashboard
3. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```
4. **Add environment variable**:
   ```
   SENDGRID_API_KEY=SG.your_api_key_here
   ```
5. **Update the API route** to use SendGrid (see SendGrid docs)

### Option 3: Nodemailer (SMTP)

1. **Install Nodemailer**:
   ```bash
   npm install nodemailer
   ```
2. **Add SMTP credentials** to `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```
3. **Update the API route** to use Nodemailer

### Option 4: Formspree (No Backend Code Needed)

1. **Sign up for Formspree**: https://formspree.io
2. **Get your form endpoint** from Formspree
3. **Update the contact form** (`/app/contact/page.tsx`) to POST directly to Formspree:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

## Testing

1. **Start your development server**:
   ```bash
   npm run dev
   ```
2. **Navigate to** `/contact`
3. **Fill out and submit the form**
4. **Check**:
   - Browser console for any errors
   - Server console/logs for the form data (currently logged)
   - Your email inbox (once email service is configured)

## Current Behavior

- ✅ Form validation works
- ✅ Form submits to API endpoint
- ✅ Success message displays
- ⚠️ **Email sending not configured** (submissions logged to console only)

## Next Steps

1. Choose an email service (Resend recommended)
2. Follow the setup steps above
3. Test the form submission
4. Verify emails are received

---

**Note:** For production, make sure to:
- Set up proper error handling
- Add rate limiting to prevent spam
- Configure CORS if needed
- Set up email templates for better formatting
