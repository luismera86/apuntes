# Comandos

## Configuración del repositorio

- `git config --global user.name "Luis Mera"`
- `git config --global user.mail "luismeradev@gmail.com"`

Para configurar de manera global que inicie en el en la rama main

- `git config --global init.defaultBranch main`

Si experimentas problemas con el CRLF se ejecuta el siguiente comando para corregirlo

- `git config core.autocrlf true`

## Comandos básicos

- `git help`    Muestra toda la lista de comandos disponibles
- `git init`    Inicia el proyecto con git
- `git status`  Muestra la información del repositorio  
- `git add .`   Agrega todos los archivos al repositorio
- `git reset .` Quita todos los archivos del repositorio
- `git checkout -- .`   Reconstruye el repositorio a como estaba en el último commit
