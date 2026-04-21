/**
 * Email Template for Waitlist Confirmation
 */
export const getWaitlistEmailHtml = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to FlowInvoice</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      margin: 0;
      padding: 0;
      color: #0f172a;
    }
    .wrapper {
      width: 100%;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #0f172a;
      padding: 32px;
      text-align: center;
    }
    .logo {
      color: #ffffff;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.025em;
    }
    .content {
      padding: 40px 32px;
    }
    h1 {
      font-size: 24px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 16px;
      letter-spacing: -0.025em;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 24px;
      color: #475569;
    }
    .highlight {
      background-color: #f1f5f9;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 24px;
      border: 1px solid #e2e8f0;
    }
    .footer {
      padding: 32px;
      background-color: #f8fafc;
      text-align: center;
      font-size: 12px;
      color: #94a3b8;
      border-top: 1px solid #f1f5f9;
    }
  </style>
</head>
<body>
  <div className="wrapper">
    <div className="container">
      <div className="header">
        <div className="logo">FLOWINVOICE</div>
      </div>
      <div className="content">
        <h1>You're on the list, ${name}!</h1>
        <p>Thanks for joining the FlowInvoice waitlist. We're building the billing engine for the next generation of independent talent, and we're thrilled to have you with us.</p>
        
        <div className="highlight">
          <strong>Early Adopter Status: Confirmed</strong><br/>
          As an early member of our community, you have locked in a <strong>40% lifetime discount</strong> on all future FlowInvoice plans.
        </div>
        
        <p>We'll notify you as soon as the private beta is ready for you. In the meantime, if you have any questions or feedback, just reply to this email.</p>
        
        <p>Best,<br><strong>The FlowInvoice Team</strong></p>
      </div>
      <div className="footer">
        © 2026 FlowInvoice. Modern billing for modern teams.<br>
        If you didn't sign up for this, please ignore this email.
      </div>
    </div>
  </div>
</body>
</html>
`;
