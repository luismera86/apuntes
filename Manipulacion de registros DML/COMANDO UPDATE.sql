
-- COMANDO UPDATE - NOS SIRVE PARA ACTUALIZAR REGISTROS Y CAMPOS EN UNA TABLA

SELECT * FROM Paciente

UPDATE Paciente SET observacion = 'Sin observaci�n' -- Actualiza todos los campos observaci�n de toda la tabla

UPDATE Paciente SET email = 'correo@mail.com' WHERE idpaciente = 3 -- Actualizamos el mail del paciente con el id 3

-- Actualizar varios campos a la ves
UPDATE Paciente SET dni = '11111111', domicilio = 'Calle nueva' WHERE idpaciente = 3