# Comandos

## Configuración del repositorio

- `git config --global user.name "Luis Mera"`
- `git config --global user.mail "luismeradev@gmail.com"`

Para configurar de manera global que inicie en el en la rama main

- `git config --global init.defaultBranch main`

Si experimentas problemas con el CRLF se ejecuta el siguiente comando para corregirlo

- `git config core.autocrlf true`

## Configurar alias

### Log

- `git config --global alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"`

Luego se usa `git lg` para ver el log

### Status

- `git config --global alias.s status --short`

Luego se usa `git s` para ver el status

## Comandos básicos

- `git help`    Muestra toda la lista de comandos disponibles
- `git init`    Inicia el proyecto con git
- `git status`  Muestra la información del repositorio  
- `git add .`   Agrega todos los archivos al repositorio
- `git reset .` Quita todos los archivos del repositorio
- `git diff`    Muestra las modificaciones que se realizaron en el archivo luego del commit, cuando el archivo tiene una M al costado
- `git diff --stage`    Muestra las modificaciones que se realizaron en el archivo luego del commit y de haber hecho un git add, cuando el archivo tiene una M al costado

## Commits

- `git commit -m "Mensaje del commit"`   Genera un punto de almacenamiento del proyecto, guarda el proyecto tal cual está y se puede recuperar en ese punto en el futuro, entre "" va una descripción o nombre del commit para poder identificar en que etapa del proyecto se encuentra
- `git commit -am "Mensaje del commit"`   Genera un punto de almacenamiento del proyecto y agrega las modificaciones realizadas en los archivos que ya esta siendo traqueados por git, en caso de que tengan una U en el archivo no los va a agregar tienen que ejecutar el comando git add . , guarda el proyecto tal cual está y se puede recuperar en ese punto en el futuro, entre "" va una descripción o nombre del commit para poder identificar en que etapa del proyecto se encuentra

- `git checkout -- .`   Reconstruye el repositorio a como estaba en el último commit

- `git commit --amend -m "Mensaje del commit actualizado"`   Actualiza el mensaje del último commit realizado

- `git reset --soft HEAD^`  El HEAD^ apunta al último commit, lo que hace este comando es borrar el último commit creado de la lista, pero no borra los archivos, este comando se utiliza generalmente cuando realizas un commit y te das cuenta que te faltaron un par de cosas, que modificaste unos minutos después, entonces para no crear otro commit y hacer una lista larga de commits, se borra el último commit y se hace uno nuevo reemplazando el anterior con la información nueva agregada.(No es recomendable usar este comando una ves realizado el push al repositorio puede genera conflictos)

## Ramas

- `git branch`  Nos indica las ramas creadas en el proyecto
- `git branch -m 'Nombre de la rama a modificar' 'Nuevo nombre de la rama'` Modifica el nombre de una rama por ejemplo git branch -m master main modifica el nombre de la rama master a main

## Viajes en el tiempo

- `git reset ---soft "hash del commit que se desea resetear"`  Elegimos el commit que deseamos borrar de la lista para reemplazarlo por un commit nuevo 
