
-- COMANDO DELETE - NOS SIRVE PARA ELIMINAR DETERMINADOS REGISTROS DE NUESTRA TABLA

SELECT * FROM Paciente

DELETE FROM Paciente -- ELIMINA TODOS LOS REGISTROS DE LA TABLA

DELETE FROM Paciente WHERE idpaciente = 3 -- ELIMINAMOS EL REGISTRO DEL ID ESPECIFICADO

-- COMO ELIMINAR CUANDO TENEMOS UNA RESTRICCI�N POR UNA RELACION CON OTRA TABLA 
SELECT * FROM TurnoPaciente
SELECT * FROM PagoPaciente

-- ELIMINAMOS EL REGISTRO QUE NOS CREA CONFLICTO CON PAGO PACIENTE
DELETE FROM PagoPaciente WHERE idpaciente = 4

-- ELIMINAMOS EL REGISTRO QUE NOS CREA CONFLICTO CON TURNO PACIENTE
DELETE FROM TurnoPaciente WHERE idpaciente = 4

-- UNA VES ELEMINADAS LAS RESTRICCIONES PODEMOS ELEIMINAR EL PACIENTE
DELETE FROM Paciente WHERE idpaciente = 4

SELECT * FROM Paciente
SELECT * FROM Turno