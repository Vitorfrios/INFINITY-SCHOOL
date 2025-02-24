import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'uma_chave_secreta_muito_segura')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///email_marketing.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False