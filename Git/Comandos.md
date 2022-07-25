# Comandos

## Configuración del repositorio

- `git config --global user.name "Luis Mera"`
- `git config --global user.email "luismera86@gmail.com"`

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

- `git help` Muestra toda la lista de comandos disponibles
- `git init` Inicia el proyecto con git
- `git status` Muestra la información del repositorio
- `git add .` Agrega todos los archivos al repositorio
- `git reset .` Quita todos los archivos del repositorio
- `git diff` Muestra las modificaciones que se realizaron en el archivo luego del commit, cuando el archivo tiene una M al costado
- `git diff --stage` Muestra las modificaciones que se realizaron en el archivo luego del commit y de haber hecho un git add, cuando el archivo tiene una M al costado

### Commits

- `git commit -m "Mensaje del commit"` Genera un punto de almacenamiento del proyecto, guarda el proyecto tal cual está y se puede recuperar en ese punto en el futuro, entre "" va una descripción o nombre del commit para poder identificar en que etapa del proyecto se encuentra
- `git commit -am "Mensaje del commit"` Genera un punto de almacenamiento del proyecto y agrega las modificaciones realizadas en los archivos que ya esta siendo traqueados por git, en caso de que tengan una U en el archivo no los va a agregar tienen que ejecutar el comando git add . , guarda el proyecto tal cual está y se puede recuperar en ese punto en el futuro, entre "" va una descripción o nombre del commit para poder identificar en que etapa del proyecto se encuentra

- `git checkout -- .` Reconstruye el repositorio a como estaba en el último commit

- `git checkout -- nombre-archivo .` Reconstruye el el archivo que deseas a como estaba en el último commit

- `git commit --amend -m "Mensaje del commit actualizado"` Actualiza el mensaje del último commit realizado

- `git reset --soft HEAD^` El HEAD^ apunta al último commit, lo que hace este comando es borrar el último commit creado de la lista, pero no borra los archivos, este comando se utiliza generalmente cuando realizas un commit y te das cuenta que te faltaron un par de cosas, que modificaste unos minutos después, entonces para no crear otro commit y hacer una lista larga de commits, se borra el último commit y se hace uno nuevo reemplazando el anterior con la información nueva agregada.(No es recomendable usar este comando una ves realizado el push al repositorio puede genera conflictos)

## Viajes en el tiempo

- `git reset --soft hash-commit` Hacemos `git lg` y elegimos el commit que deseamos borrar de la lista para reemplazarlo por un commit nuevo
- `git reset --mixed hash-commit` Destruye los commits posteriores al commit elegido pero sin destruir los cambios realizados
- `git reset --hard hash-commit` Destruye los commits posteriores al commit elegido y toda los cambios que se realizaron posteriores al commit

### Recuperar commits borrados con reset hard

- `git reflog` Muestra un listado de los movimientos cronológicos que realizamos en el repositorio, como commits eliminados y modificados
- `git reset --hard hash-commit` Elegimos el commit eliminado anteriormente y el repositorio vuelve al estado en el que se encontraba en aquel momento

## Ramas y Merge

### Ramas

- `git branch nombre-rama` Creamos una nueva rama
- `git branch` Muestra la lista de ramas creadas
- `git branch -m nombre-rama nuevo-nombre-rama` Modifica el nombre de una rama por ejemplo git branch -m master main modifica el nombre de la rama master a main
- `git checkout nombre-rama` Nos mueve a la rama elegida
- `git checkout -b nombre-rama` Creamos una nueva rama y automáticamente nos redirige a la misma
- `git branch -d nombre-rama` Borramos la rama elegida
- `git branch -d nombre-rama -f` Borramos la rama elegida de manera forzada, esto suele suceder cuando la rama a eliminar tiene cambios que no se hicieron merge con ninguna otra rama

### Merge

- `git merge nombre-rama` Trae todos los archivos de la rama elegida a la rama donde se encuentran posicionados

### Merge conflictos

- Modificación manual: Editas el archivo de manera manual para que quede la versión final
- Accept incoming change: Modifica el archivo como y lo deja como viene del merge y luego hacer un commit luego de la unión para que desaparezcan los ! de los archivos que tenían conflicto

## Tags - Etiquetas

Los tag normalmente se usan para marcar en puntos del proyecto datos como las versiones del estado del proyecto, como por ejemplo en este commit está la versión v1.0.0 y así indicamos en por medio de un tag un punto especifico de los commit

- `git tag` Muestra la lista de tags
- `git tag nombre-tag` Creamos un tag en el commit donde estamos situados
- `git tag -d nombre-tag` Eliminamos el tag
- `git tag -a nombre-tag -m "Mensaje del tag o Descripción"` Creamos un tag con una versión anotada en el que podemos agregarle un mensaje o descripción
- `git tag -a nombre-tag hash-commit -m "Mensaje del tag o Descripción` Ponemos un tag a un commit especifico
- `git show nombre-tag` Vemos información completa del tag con datos de creación, autor, etc

## Stash

El Stash es como una bobeda donde quedan guardados todos los cambios realizados en el repositorio que no se encuentren guardados en un commit, no es recomendado crear mas de un Stash ya que puede ser complicado recuperar la información de lo trabajado en el, es preferible trabajar con ramas para evitar conflictos y errores y utilizar el stash como último recurso.

- `git stash` Creamos el stash, guarda todos los cambios realizados que no se hicieron commit en el stash y vuelve el repositorio al estado del último commit
- `git stash list` Nos muestra la lista de stash realizados
- `git stash pop` Recuperamos el repositorio al estado del último stash creado y se elimina el stash, en caso de tener conflictos en los documentos se los resuelve de la misma manera que en el merge
- `git stash clear` Borra todos los stash creados (en caso de arrepentirse y querer recuperar un stash se hace lo mismo para recuperar un commit con un `git reflog`)
- `git stash drop stash@{numero-stash}` Eliminamos el stash elegido, entre los { } ponemos el número del stash que queremos eliminar como 0,1, 2 etc
- `git stash save "Mensaje o descripción del stash"` Guardamos el stash con un mensaje o descripción para poder identificarlo

## Rebase

Suponiendo que tenemos una rama main con dos commits y trabajamos en una rama pruebas paralelas con dos commits, necesitamos mover la linea del tiempo de los commits de la rama pruebas delante de los commits de la rama main, posicionados en la rama pruebas hacemos un `git rebase main` entonces todos los commits de la rama pruebas se posiciona en una linea de tiempo superior a las de la rama main

NOTA: Realizar cambios con rebase si los cambios no fueron subidos al repositorio y trabajar en ramas.

### Unir commits entre ramas

Cuando necesitamos que una rama tenga los commits de otra rama podemos utilizar un rebase
Nos posicionamos en la rama que recibe los commits y escribimos `git rebase nombre-rama` en nombre-rama ponemos el nombre de la rama de la cual queremos unir los commits

### Rebase - Squash

Unir commits

- `git rebase -i HEAD~4` Nos muestra los últimos 4 commits realizados, se despliega una pantalla con el listado de commits y abajo un listado de ayudas para realizar los cambios, uno de ellos es squash, presionamos la tecla "A" y luego enter para editar reemplazamos la palabra pick delante del commit que queremos unir con el commit anterior y apretamos enter, aparecerá otra pantalla donde se puede modificar el nombre del nuevo commit fusionado, apretar enter luego de los : se escribe wq! y se presiona enter para guardar los cambios

### Rebase - Reword

Renombrar commits

- `git rebase -i HEAD~4` Nos muestra los últimos 4 commits realizados, se despliega una pantalla con el listado de commits y abajo un listado de ayudas para realizar los cambios, uno de ellos es reword, presionamos la tecla "A" y luego enter para editar reemplazamos la palabra pick delante de los commits que queremos renombrar con el commit anterior y apretamos enter, aparecerá otra pantalla donde se puede modificar el nombre de los commits a renombrar, al principio aparecerá uno solo, aprietas la tecla "A" y presionas enter para editar, se modifica el nombre del commit, apretar la tecla ESC luego de los : se escribe wq! y se presiona enter para guardar los cambios y aparecerá el siguiente commit elegido para renombrar

### Rebase - Edit

Dividir un commit

- `git rebase -i HEAD~4` Nos muestra los últimos 4 commits realizados, se despliega una pantalla con el listado de commits y abajo un listado de ayudas para realizar los cambios, uno de ellos es edit, presionamos la tecla "A" y luego enter para editar reemplazamos la palabra pick delante de los commits que queremos dividir, apretamos la tecla ESC luego de los : se escribe wq! y se presiona enter para guardar los cambios y luego indicara la pantalla en la cual hacemos un `git reset HEAD^` para volver a editar los cambios que se hicieron en el último commit y allí crear los commits necesarios en los que quieres realizar la separación, luego cuando se finalice eso se escribe `git rebase --continue` para terminar la edición
