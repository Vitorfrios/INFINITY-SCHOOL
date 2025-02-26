import time
import pyautogui
import datetime
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Configurações iniciais
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
link_pagina = "https://www.infinityschool.app/area/"

cpf = "12055250680"
data_nascimento = "21102004"
grupo_whatsapp = "Aulas infinity"


def iniciar_navegador():
    options = webdriver.ChromeOptions()
    options.binary_location = chrome_path
    driver = webdriver.Chrome(options=options)
    driver.maximize_window()
    driver.get(link_pagina)
    return driver


def fazer_login(driver):
    driver.find_element(By.XPATH, '//*[@id="geral_home"]/form/input[1]').send_keys(cpf)
    driver.find_element(By.XPATH, '//*[@id="data_nascimento"]').send_keys(data_nascimento)
    driver.find_element(By.XPATH, '//*[@id="geral_home"]/form/button').click()
    time.sleep(3)


def marcar_presenca(driver):
    driver.find_element(By.XPATH, '//*[@id="geral_home"]/div[2]/form[1]/button').click()
    time.sleep(2)
    driver.find_element(By.XPATH, '//*[@id="geral_home"]/form[2]/button').click()
    time.sleep(2)


def capturar_token(driver):
    try:
        token_element = driver.find_element(By.XPATH, '//*[@id="geral_home"]/script')
        token = token_element.get_attribute("innerText").split('token_correto = "')[1].split('"')[0]
        return token
    except:
        print("Token não encontrado. Encerrando o programa...")
        driver.quit()
        exit()


def concluir_presenca(driver, token):
    token_input = driver.find_element(By.XPATH, '//*[@id="token"]')
    token_input.send_keys(token)
    time.sleep(1)
    driver.find_element(By.XPATH, '//*[@id="submit-button"]').click()


def dar_zoom_na_tela(niveis=1):
    print("Aplicando zoom na tela...")
    for _ in range(niveis):
        pyautogui.hotkey('ctrl', '+')
        time.sleep(1)
    print(f"Zoom aplicado {niveis} vezes.")


def rolar_para_baixo(quantidade=200):
    print(f"Rolando a tela para baixo por {quantidade} pixels...")
    pyautogui.scroll(-quantidade)
    print(f"Rolagem para baixo de {quantidade} pixels concluída.")


def capturar_tela():
    print("Capturando tela...")
    pyautogui.press('prtsc')
    time.sleep(3)


def abrir_whatsapp():
    caminho_whatsapp = r"C:\\Users\\vitor\\OneDrive\\Área de Trabalho\\WhatsApp.lnk"
    print("Abrindo WhatsApp Desktop...")
    os.startfile(caminho_whatsapp)
    time.sleep(3)


def localizar_grupo(grupo_nome):
    print(f"Procurando o grupo '{grupo_nome}'...")
    pyautogui.hotkey('ctrl', 'f')
    time.sleep(1)
    pyautogui.press('delete')
    time.sleep(1)
    pyautogui.write(grupo_nome)
    time.sleep(2)
    pyautogui.press('tab')
    time.sleep(2)
    pyautogui.press('enter')
    time.sleep(2)


def enviar_imagem():
    dia_atual = datetime.datetime.now().strftime("%d/%m/%Y")
    print("Enviando a captura de tela...")
    pyautogui.hotkey('ctrl', 'v')
    time.sleep(2)
    mensagem = f"Aula compartilhada - {dia_atual}"
    pyautogui.write(mensagem)
    pyautogui.press('enter')
    print("Imagem enviada com sucesso!")


# Execução principal
driver = iniciar_navegador()
fazer_login(driver)
marcar_presenca(driver)
token = capturar_token(driver)
concluir_presenca(driver, token)
time.sleep(2)
rolar_para_baixo(200)
time.sleep(2)

dar_zoom_na_tela(3)
time.sleep(3)
capturar_tela()

abrir_whatsapp()
localizar_grupo(grupo_whatsapp)
enviar_imagem()

print("Processo finalizado com sucesso!")

driver.quit()

# Ajuste os tempos de espera conforme necessário para evitar erros de carregamento da página ou do WhatsApp.
