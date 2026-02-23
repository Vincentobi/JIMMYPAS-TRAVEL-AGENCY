import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ConnectData {
    fullName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

// Contact form handler
async function sendContactEmail(contactData: ConnectData) {
    const html = getContactHtml(contactData);
    console.log(`📧 Sending message notification to admin for contact inquiry from ${contactData.email}...`);

    try {
        await resend.emails.send({
            from: 'Jimmypass Travel <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL || 'admin@jimmypass.com', // Notify admin about the message
            subject: 'New Contact Form Submission - Jimmypass Travel Agency',
            html: html,
        });
        return true;
    } catch (error: unknown) {
        console.error('Failed to send contact email:', error);
        return false;
    }
}

// Main Handler
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const contactData: ConnectData = body;

        // Validate required fields
        if (!contactData.fullName || !contactData.email || !contactData.phoneNumber || !contactData.message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log('📝 New contact message received from:', contactData.email);

        // Send notification email to admin
        const emailSent = await sendContactEmail(contactData);

        if (!emailSent) {
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }
        

        // Return Success response
        return NextResponse.json({
            success: true,
            message: 'Message sent successfully'
        }, { status: 201 });

    } catch (error) {
        console.error('Contact submission error:', error);
        return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
    }
}

function getContactHtml(contactData: ConnectData) {
    const { fullName, email, phoneNumber, message } = contactData;
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: #00666b;
            color: #ffffff;
            padding: 15px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 1.8em;
        }
        .section {
            padding: 20px;
        }
        .section-title {
            font-size: 1.2em;
            margin-bottom: 10px;
            font-weight: bold;
            color: #00666b;
        }
        .details-box {
            background-color: #f9f9f9;
            border-left: 4px solid #00666b;
            padding: 15px;
            margin: 10px 0;
        }
        .label {
            font-weight: bold;
            color: #555;
            display: inline-block;
            width: 100px;
        }
        .footer {
            padding: 15px;
            text-align: center;
            background: #f4f4f4;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Contact Inquiry</h1>
        </div>
        <div class="section">
            <div class="section-title">Sender Information</div>
            <div class="details-box">
                <p><span class="label">Name:</span> ${fullName}</p>
                <p><span class="label">Email:</span> ${email}</p>
                <p><span class="label">Phone:</span> ${phoneNumber}</p>
            </div>
        </div>
        <div class="section">
            <div class="section-title">Message</div>
            <div class="details-box">
                <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
        </div>
        <div class="footer">
            <p>This is an automated notification from Jimmypass Travel Agency System.</p>
        </div>
    </div>
</body>
</html>
    `.trim();
}
