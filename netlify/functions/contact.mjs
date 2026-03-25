import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "luxautownc@gmail.com";
const FROM_EMAIL = "LAV Motors <noreply@lavmotors.com>";

function buildEmailHtml({ name, email, phone, service, vehicle, message }) {
  const row = (label, left, right) => `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:4px;">
      <tr>
        <td width="50%" style="padding:0 12px 20px 0;vertical-align:top;">
          <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#c9a84c;font-family:sans-serif;">${label[0]}</p>
          <p style="margin:0;font-size:17px;font-weight:700;color:#ffffff;font-family:sans-serif;">${left}</p>
        </td>
        ${right ? `
        <td width="50%" style="padding:0 0 20px 12px;vertical-align:top;">
          <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#c9a84c;font-family:sans-serif;">${label[1]}</p>
          <p style="margin:0;font-size:17px;font-weight:700;color:#ffffff;font-family:sans-serif;">${right}</p>
        </td>` : ""}
      </tr>
    </table>`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#0a0a0a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:#0a0a0a;border:1px solid #222;border-bottom:none;border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
              <p style="margin:0 0 2px 0;font-size:9px;font-weight:700;letter-spacing:0.25em;color:#c9a84c;text-transform:uppercase;font-family:sans-serif;">Luxury Auto Vehicles</p>
              <p style="margin:0;font-size:28px;font-weight:800;letter-spacing:0.06em;color:#ffffff;font-family:sans-serif;">LAV MOTORS</p>
              <div style="width:40px;height:2px;background:#c9a84c;margin:16px auto 0;"></div>
            </td>
          </tr>

          <!-- Alert bar -->
          <tr>
            <td style="background:#c9a84c;padding:14px 40px;border-left:1px solid #c9a84c;border-right:1px solid #c9a84c;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#0a0a0a;font-family:sans-serif;letter-spacing:0.01em;">
                NEW INQUIRY${service ? ` &nbsp;·&nbsp; ${service}` : ""} &nbsp;·&nbsp; ${name}
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#111111;border:1px solid #222;border-top:none;border-bottom:none;padding:36px 40px 28px;">

              ${row(["Full Name", "Phone"], name, phone || "&mdash;")}
              ${row(["Email", "Service"], `<a href="mailto:${email}" style="color:#ffffff;text-decoration:underline;text-underline-offset:3px;font-size:15px;">${email}</a>`, service || "&mdash;")}

              ${vehicle ? `
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 28px 0;">
                    <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#c9a84c;font-family:sans-serif;">Vehicle</p>
                    <p style="margin:0;font-size:17px;font-weight:700;color:#ffffff;font-family:sans-serif;">${vehicle}</p>
                  </td>
                </tr>
              </table>` : ""}

              <!-- Divider -->
              <div style="height:1px;background:#222;margin-bottom:28px;"></div>

              <!-- Message -->
              <p style="margin:0 0 12px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#c9a84c;font-family:sans-serif;">Message</p>
              <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-left:3px solid #c9a84c;border-radius:0 8px 8px 0;padding:20px 24px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#cccccc;font-family:sans-serif;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your inquiry at LAV Motors" style="display:inline-block;background:#c9a84c;color:#0a0a0a;font-size:13px;font-weight:800;text-decoration:none;padding:15px 40px;border-radius:50px;font-family:sans-serif;letter-spacing:0.05em;text-transform:uppercase;">
                      Reply to ${name.split(" ")[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0d0d0d;border:1px solid #222;border-top:1px solid #1a1a1a;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#444;font-family:sans-serif;letter-spacing:0.04em;">1105 Spartanburg Hwy &nbsp;·&nbsp; Hendersonville, NC 28792</p>
              <p style="margin:6px 0 0 0;font-size:11px;color:#444;font-family:sans-serif;letter-spacing:0.04em;">(828) 989-8985 &nbsp;·&nbsp; lavmotors.com</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, phone, service, vehicle, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry${service ? ` — ${service}` : ""} from ${name}`,
      html: buildEmailHtml({ name, email, phone, service, vehicle, message }),
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Resend error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send email" }) };
  }
};
