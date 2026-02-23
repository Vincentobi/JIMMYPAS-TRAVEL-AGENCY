import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
    //step 1: Primary goal
    primaryGoal: 'study' | 'work' | 'visit' | 'immigrate' | 'other' | '';

    //step 2: Country preference
    countryPreference: string;

    //step 3: Educational background
    educationalBackground: {
        highestQualification: string;
        preferredStartdate: string;
        yearsOfWorkExperience: string;
    }

    //step 4: Form
    personalDetails: {
        fullName: string;
        email: string;
        phone: string;
    }
}

interface Registration extends FormData {
    id: string;
    submittedAt: string;
}








// Helper to generate unique registration ID
function generateRegistrationId() {
    return `REG-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
}

// Stub functions for email notifications
// In a real application, these would be imported from a separate module
async function sendUserConfirmationEmail(registration: Registration) {
    const html = getUserConfirmationHtml(registration);
    console.log(`📧 Sending confirmation email to ${registration.personalDetails.email}...`);

    try {
        await resend.emails.send({
            from: 'Jimmypass Travel <onboarding@resend.dev>',
            to: registration.personalDetails.email,
            subject: 'Registration Confirmed - Jimmypass Travel Agency',
            html: html,
        });
        return true;
    } catch (error: unknown) {
        console.error('Failed to send user confirmation email:', error);
        if (error && typeof error === 'object' && 'response' in error) {
            const err = error as { response: unknown };
            console.error('Resend Error Response:', err.response);
        }
        return false;
    }
}

async function sendAdminNotificationEmail(registration: Registration) {
    const html = getAdminNotificationHtml(registration);
    console.log(`📧 Sending notification email to admin for registration ${registration.id}...`);

    try {
        await resend.emails.send({
            from: 'Jimmypass System <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL || 'admin@jimmypass.com',
            subject: `NEW REGISTRATION: ${registration.personalDetails.fullName} (${registration.id})`,
            html: html,
        });
        return true;
    } catch (error: unknown) {
        console.error('Failed to send admin notification email:', error);
        if (error && typeof error === 'object' && 'response' in error) {
            const err = error as { response: unknown };
            console.error('Resend Error Response:', err.response);
        }
        return false;
    }
}




// Main Handler
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { formData } = body;

        // Validate required fields
        if (!formData?.personalDetails?.fullName ||
            !formData?.personalDetails?.email ||
            !formData?.personalDetails?.phone ||
            !formData?.primaryGoal ||
            !formData?.countryPreference) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Generate unique registration ID
        const registrationId = generateRegistrationId();

        // Prepare registration object
        const registration = {
            id: registrationId,
            ...formData,
            submittedAt: new Date().toISOString(),
        };

        console.log('📝 New registration received:', {
            id: registrationId,
            email: formData.personalDetails.email,
        });

        // Here you would typically save to a database
        // For now, we'll just return success

        // Send confirmation email to user 
        const userEmailSent = await sendUserConfirmationEmail(registration);

        // Send notification email to admin
        const adminEmailSent = await sendAdminNotificationEmail(registration);

        console.log('✅ Registration processed and emails sent status:', {
            userEmail: userEmailSent,
            adminEmail: adminEmailSent
        });

        // Return Success response
        return NextResponse.json({
            success: true,
            registrationId,
            message: 'Registration received successfully'
        }, { status: 201 });

    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
    }
}



// ============================================================================
// EMAIL TEMPLATE - USER CONFIRMATION
// ============================================================================

function getUserConfirmationHtml(registration: Registration) {
    const { personalDetails, primaryGoal, countryPreference, id } = registration;

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Confirmation</title>
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
        }
        .details-box {
            background-color: #f9f9f9;
            border-left: 4px solid #00666b;
            padding: 20px;
            margin: 20px 0;
        }
        .details-item {
            margin-bottom: 10px;
        }
        .details-label {
            font-weight: bold;
            color: #555;
            width: 150px;
            display: inline-block;
        }
        .footer {
            background-color: #f4f4f4;
            color: #777;
            padding: 20px;
            text-align: center;
            font-size: 12px;
        }
        .button {
            display: inline-block;
            padding: 12px 25px;
            background-color: #00666b;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Jimmypass Travel Agency</h1>
        </div>
        <div class="content">
            <div class="greeting">Hello ${personalDetails.fullName},</div>
            <p>Thank you for choosing <strong>Jimmypass Travel Agency</strong>. We have successfully received your registration and our team is already reviewing your details.</p>
            
            <div class="details-box">
                <div class="details-item">
                    <span class="details-label">Registration ID:</span>
                    <span>${id}</span>
                </div>
                <div class="details-item">
                    <span class="details-label">Primary Goal:</span>
                    <span>${primaryGoal.charAt(0).toUpperCase() + primaryGoal.slice(1)}</span>
                </div>
                <div class="details-item">
                    <span class="details-label">Preferred Country:</span>
                    <span>${countryPreference}</span>
                </div>
            </div>
            
            <p>One of our consultants will contact you shortly via <strong>${personalDetails.phone}</strong> or <strong>${personalDetails.email}</strong> to discuss the next steps in your journey.</p>
            
            <p>If you have any urgent questions, feel free to reply to this email.</p>
            
            <a href="https://jimmypass.com" class="button">Visit Our Website</a>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Jimmypass Travel Agency. All rights reserved.</p>
            <p>123 Travel Avenue, Suite 100 | Contact: +1 (234) 567-890</p>
        </div>
    </div>
</body>
</html>
    `.trim();
}


// ============================================================================
// EMAIL TEMPLATE - ADMIN NOTIFICATION
// ============================================================================

function getAdminNotificationHtml(registration: Registration) {
    const { personalDetails, primaryGoal, countryPreference, id, educationalBackground, submittedAt } = registration;

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Registration Notification</title>
    <style>
        body { font-family: sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px; }
        .card { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 600px; margin: auto; }
        .header { border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px; }
        .header h2 { margin: 0; color: #00666b; }
        .section { margin-bottom: 20px; }
        .section-title { font-weight: bold; text-transform: uppercase; font-size: 12px; color: #777; margin-bottom: 10px; display: block; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .label { font-weight: bold; color: #555; font-size: 13px; }
        .value { font-size: 14px; color: #000; }
        .footer { font-size: 11px; color: #999; margin-top: 20px; text-align: center; }
        .id-badge { background: #eee; padding: 2px 8px; border-radius: 4px; font-family: monospace; font-size: 12px; }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h2>New Client Registration</h2>
            <p>A new inquiry has been received via the website.</p>
        </div>

        <div class="section">
            <span class="section-title">Submission Details</span>
            <div class="grid">
                <div><span class="label">Registration ID:</span><br><span class="id-badge">${id}</span></div>
                <div><span class="label">Date/Time:</span><br><span class="value">${new Date(submittedAt).toLocaleString()}</span></div>
            </div>
        </div>

        <div class="section">
            <span class="section-title">Personal Information</span>
            <div class="grid">
                <div><span class="label">Full Name:</span><br><span class="value">${personalDetails.fullName}</span></div>
                <div><span class="label">Email:</span><br><span class="value">${personalDetails.email}</span></div>
                <div><span class="label">Phone:</span><br><span class="value">${personalDetails.phone}</span></div>
            </div>
        </div>

        <div class="section">
            <span class="section-title">Travel & Goals</span>
            <div class="grid">
                <div><span class="label">Primary Goal:</span><br><span class="value">${primaryGoal.toUpperCase()}</span></div>
                <div><span class="label">Preferred Country:</span><br><span class="value">${countryPreference}</span></div>
            </div>
        </div>

        <div class="section">
            <span class="section-title">Background</span>
            <div class="grid">
                <div><span class="label">Qualification:</span><br><span class="value">${educationalBackground.highestQualification}</span></div>
                <div><span class="label">Experience:</span><br><span class="value">${educationalBackground.yearsOfWorkExperience} years</span></div>
                <div><span class="label">Start Date:</span><br><span class="value">${educationalBackground.preferredStartdate}</span></div>
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


