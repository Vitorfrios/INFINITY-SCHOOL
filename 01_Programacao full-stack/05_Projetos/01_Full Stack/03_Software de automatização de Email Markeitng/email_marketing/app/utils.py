import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import pandas as pd
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

def send_email(to, subject, body):
    msg = MIMEMultipart()
    msg['From'] = 'seu_email@example.com'
    msg['To'] = to
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'html'))

    try:
        with smtplib.SMTP('smtp.example.com', 587) as server:
            server.starttls()
            server.login('seu_email@example.com', 'sua_senha')
            server.send_message(msg)
        return f'Email enviado para {to}'
    except Exception as e:
        return f'Erro ao enviar email: {str(e)}'

def generate_csv_report(emails):
    df = pd.DataFrame(emails, columns=['Email'])
    df.to_csv('relatorio_emails.csv', index=False)

def generate_pdf_report(emails):
    c = canvas.Canvas('relatorio_emails.pdf', pagesize=letter)
    c.drawString(100, 750, "Relatório de Emails")
    y = 730
    for email in emails:
        c.drawString(100, y, email)
        y -= 20
    c.save()