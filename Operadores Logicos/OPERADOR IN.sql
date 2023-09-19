

-- OPERADOR IN - NOS PERMITE FILTRAR POR UN GRUPO DE VALORES ESTABLECIDOS

SELECT * FROM Turno

SELECT * FROM Turno WHERE estado IN(0) -- ENTRE LOS PARENTESIS PODEMOS PONER TODOS LOS DATOS QUE QUEREMOS FILTRAR

SELECT * FROM Paciente

SELECT * FROM Paciente WHERE apellido IN('Paredes','Perez','Diaz') -- nos filtra de manera similar al or pero de un grupo especifico