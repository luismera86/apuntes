
-- COMBINANDO OPERADORES

SELECT * FROM Paciente WHERE apellido = 'Perez' AND nombre = 'Lucas' OR apellido = 'Paredes'

-- DARLE PRIORIDAD AL FILTRO AGREGANDO PARENTESIS, PIRMERO SE TIENE QUE RESOLVER LO DE LOS PARENTESIS Y LUEGO HACE LA SIGUIENTE CONSULTA
SELECT * FROM Paciente WHERE apellido = 'Perez' AND (nombre = 'Lucas' OR apellido = 'Paredes')