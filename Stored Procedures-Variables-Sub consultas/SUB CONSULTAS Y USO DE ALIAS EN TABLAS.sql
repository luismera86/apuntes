
-- SUB CONSULTAS Y USO DE ALIAS EN TABLAS

SELECT nombre, apellido, idPais, observacion,
(SELECT pais FROM Pais PS WHERE PS.idPais = PA.idPais) DESPAIS -- CON LOS PARENTESIS INDICAMOS EL SUB QUERY CON EL ALIAS DESPAIS
FROM Paciente PA WHERE idpaciente = 5

