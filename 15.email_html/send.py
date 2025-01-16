import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Email settings
from_email = "samuelcolman07@gmail.com"  # Replace with your email
to_email = "samuelcolmaan16@gmail.com"    # Replace with the recipient's email
password = ""      # Replace with your email password (or app-specific password if using Gmail)

# HTML content (paste your HTML code here)
html_content = """ 
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    <center>
        <table width='600px'>
            <thead>
                <tr>
                    <th style='padding-top: 32px; padding-bottom: 32px;'>
                        <img src='https://servidor-estaticos.vercel.app/EBAC_Banking.png' alt='EBAC'>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style='text-align: center; font-family: sans-serif; background-color: #10AC84; color: #FFF; font-size: 24px; font-weight: b; padding-top: 8px; padding-bottom: 8px'>
                        You received a transfer
                    </td>
                </tr>
                <tr>
                    <td style='padding-left:40px; padding-top: 32px; padding-bottom: 32px;'>
                        <p style='font-size: 20px; font-family: sans-serif; margin: 0'>
                            Hello, <b>Name</b>. <br>
                            You received a pix from <b>name</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style='background-color: #F8F2F2; padding: 16px 40px; font-family: sans-serif; font-size: 14px;'>
                        <table width='520' cellspacing='0' cellpadding='0'>
                            <tbody>
                                <tr>
                                    <td align='left'>Amount received</td> 
                                    <td align='right'>
                                        <b>R$ 3.00,00</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align='right' style='padding-top: 8px;'>
                        <p style='margin: 0; font-family: sans-serif; font-size: 12px;'>
                            Pix received on 09/20/2022 at 12pm <br>
                            for more details, go to the app
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style='padding-top: 128px;'>
                        <center>
                            <a href='https://instagram.com'><img src='https://servidor-estaticos.vercel.app/instagram.png' alt='Instagram'></a>
                            <a href='https://facebook.com'><img src='https://servidor-estaticos.vercel.app/facebook.png' alt='Facebook'></a>
                            <a href='https://twitter.com'><img src='https://servidor-estaticos.vercel.app/twitter.png' alt='Twitter'></a>
                        </center>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
</body>
</html>
"""

# Create email message
msg = MIMEMultipart()
msg['From'] = from_email
msg['To'] = to_email
msg['Subject'] = "Subject of the Email"

# Attach the HTML content
msg.attach(MIMEText(html_content, "html"))

# Send the email
try:
    # Establish the server connection (Gmail SMTP server)
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()  # Secure the connection
    server.login(from_email, password)
    server.send_message(msg)
    print("Email sent successfully!")
    server.quit()
except Exception as e:
    print("Error:", e)
