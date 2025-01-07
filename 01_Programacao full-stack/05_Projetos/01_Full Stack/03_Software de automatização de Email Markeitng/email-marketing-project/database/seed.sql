-- backend/database/seed.sql

-- Inserir dados de exemplo na tabela email_records
INSERT INTO email_records (email, subject, body, status)
VALUES
('cliente1@example.com', 'Promoção Especial de Natal', 'Desconto de 30% em todos os produtos. Aproveite!', 'Enviado'),
('cliente2@example.com', 'Novidades da Coca-Cola', 'Novos sabores de refrigerantes estão disponíveis. Confira!', 'Enviado'),
('cliente3@example.com', 'Oferta Exclusiva para Você', 'Compre 1 e ganhe 1 grátis. Não perca!', 'Pendente'),
('cliente4@example.com', 'Feliz Ano Novo!', 'Desejamos a você um 2023 repleto de alegrias e conquistas!', 'Falhou');
