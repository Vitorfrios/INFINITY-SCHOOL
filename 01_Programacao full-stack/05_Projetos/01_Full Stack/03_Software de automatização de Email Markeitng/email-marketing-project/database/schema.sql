-- backend/database/schema.sql

-- Criação do banco de dados (caso não exista)
CREATE DATABASE IF NOT EXISTS email_marketing_db;

-- Usar o banco de dados criado
USE email_marketing_db;

-- Criação da tabela 'email_records' para armazenar os registros dos e-mails
CREATE TABLE IF NOT EXISTS email_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
