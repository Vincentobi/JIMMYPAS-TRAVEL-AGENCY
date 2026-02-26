import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


interface InquiryForm {
    fullName: string;
    email: string;
    destination: string;
    message: string;
}

async function sendInquiryEmail(inquiryData: InquiryForm) {
    const inquiryHtml = getInquiryHtml(inquiryData);
    console.log(`📧 Sending message notification to admin for inquiry from ${inquiryData.fullName}...`);

    try {
        await resend.emails.send({
            from: 'Jimmypass Travel <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL || 'admin@jimmypass.com', // Notify admin about the message
            subject: 'New Inquiry Form Submission - Jimmypass Travel Agency',
            html: inquiryHtml,
        });
        return true;
    } catch (error: unknown) {
        console.error('Failed to send contact email:', error);
        return false;
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const inquiryData: InquiryForm = body;


        //Validate required fields
        if (!inquiryData.fullName || !inquiryData.email || !inquiryData.destination || !inquiryData.message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        console.log('📝 New Inquiry received from:', inquiryData.fullName);

        // Send notification email to admin
        const emailSent = await sendInquiryEmail(inquiryData);

        if (!emailSent) {
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }

        // Return Success response
        return NextResponse.json({
            success: true,
            message: 'Message sent successfully'
        }, { status: 201 });

    } catch (error) {
        console.error('Inquiry submission error:', error);
        return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
    }
}

function getInquiryHtml(inquiryData: InquiryForm) {
    const { fullName, email, destination, message } = inquiryData;
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width,initial-scale=1.0">
                <title>Inquiry Submission</title>
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
                        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                    }
                    .header {
                        background-color: #00666b;
                        color: white;
                        padding: 30px;
                        text-align: center;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 24px;
                    }
                    .content {
                        padding: 30px;
                    }
                    .greeting {
                        font-size: 18px;
                        margin-bottom: 20px;
                        color: #00666b;
                    }
                    .details {
                        background-color: #f9f9f9;
                        padding: 20px;
                        border-radius: 6px;
                        margin-bottom: 20px;
                    }
                    .details p {
                        margin: 8px 0;
                        font-size: 16px;
                    }
                    .details strong {
                        color: #00666b;
                        min-width: 120px;
                        display: inline-block;
                    }
                    .footer {
                        background-color: #f0f0f0;
                        padding: 20px;
                        text-align: center;
                        font-size: 14px;
                        color: #666;
                    }
                    .cta-button {
                        display: inline-block;
                        background-color: #00666b;
                        color: white;
                        padding: 12px 25px;
                        border-radius: 5px;
                        text-decoration: none;
                        font-weight: bold;
                        margin-top: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Inquiry Request Received</h1>
                    </div>
                    <div class="content">
                        <p class="greeting">Hello Jimmypass Team,</p>
                        <p>A new inquiry request has been submitted through the website. Here are the details:</p>
                        
                        <div class="details">
                            <p><strong>Full Name:</strong> ${fullName}</p>
                            <p><strong>Email Address:</strong> ${email}</p>
                            <p><strong>Destination:</strong> ${destination}</p>
                            <p><strong>Message:</strong> ${message}</p>
                        </div>
                        
                        <p>Please review the inquiry and get back to the sender as soon as possible.</p>
                        
                        <div class="footer">
                            <p>This is an automated notification from Jimmypass Travel Agency website.</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}