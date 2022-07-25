# Comandos

## Push

- `git push -u origin main` Configura git por defecto cuando se hace un `git push` se realice un push de la rama main

### Push - Tags

- `git push --tags` Subimos todos los tags del repositorio a github

### Releases Tags

Se pueden realizar Releases a los tags dentro de la plataforma de github para dar un título y descripciones más interactivas y visuales con texto con formato md e imágenes, sobre los tag realizados, la opción se encuentra a la derecha del menú principal de la plataforma de github

## Pull

- `git pull` Traemos el repositorio que se encuentra guardado en github

## Clonar repositorio

- `git clone url-repositorio` La url del repositorio la conseguimos de github, clona la rama main del repositorio por defecto

### Git pull rebase

Cuando tenemos conflicto ya que viene del repositorio remoto un archivo que genera conflicto con el archivo del repositorio local

- `git config --global pull.rebase true` Configura el pull para que haga rebase solo en este repositorio
