
-- OPERADOR NOT - LO QUE NOS PERMITE ES NEGAR CUALQUIER OPERADOR QUE ALLAMOS EJECUTADO ANTES COMO LINK Y LIKE

SELECT * FROM Paciente

SELECT * FROM Paciente WHERE nombre NOT LIKE'%luc%' 
-- AL PONER EL OPERADOR NOT DELANTE INDICAMOS QUE QUEREMOS LOS RESULTADOS DISTINTOS AL FILTRO APLICADO

SELECT * FROM Paciente WHERE apellido NOT IN('Perez') -- OBTENEMOS TODOS LOS APELLIDOS MENOS PEREZ