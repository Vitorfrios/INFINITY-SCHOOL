from flask import request, jsonify
from .models import db, Email
from .utils import send_email, generate_csv_report, generate_pdf_report

def init_routes(app):
    @app.route('/emails', methods=['GET'])
    def get_emails():
        emails = Email.query.all()
        return jsonify([email.email for email in emails])

    @app.route('/emails', methods=['POST'])
    def add_email():
        data = request.json
        new_email = Email(email=data['email'])
        db.session.add(new_email)
        db.session.commit()
        return jsonify({'message': 'Email adicionado com sucesso!'}), 201

    @app.route('/emails/<int:id>', methods=['DELETE'])
    def delete_email(id):
        email = Email.query.get_or_404(id)
        db.session.delete(email)
        db.session.commit()
        return jsonify({'message': 'Email removido com sucesso!'}), 200

    @app.route('/send-email', methods=['POST'])
    def send_email_route():
        data = request.json
        send_email(data['to'], data['subject'], data['body'])
        return jsonify({'message': 'Email enviado com sucesso!'}), 200

    @app.route('/generate-report', methods=['GET'])
    def generate_report():
        emails = Email.query.all()
        email_list = [email.email for email in emails]

        generate_csv_report(email_list)
        generate_pdf_report(email_list)

        return jsonify({'message': 'Relatórios gerados com sucesso!'}), 200