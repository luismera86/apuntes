
-- OPERADOR LIKE - NOS PERMITE TRABAJAR SOBRE CAMPOS DE TIPO CADENA DE CARACTER


SELECT * FROM Paciente

-- OBTENEMOS CUALQUIER COINCIDENCIA CON ESOS CARACTERES ENVIADOS SIEMPRE PONIENDO EL % AL PRINCIPIO Y AL FINAL
SELECT * FROM Paciente WHERE nombre LIKE'%luc%'