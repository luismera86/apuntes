

-- CONDICIONAL EXIST

DECLARE @idpaciente int 
DECLARE @idturno int
SET @idpaciente = 7

IF @idpaciente = 7
BEGIN  -- INICIA EL BLOQUE DE INSTRUCCIONES PARA EL CONDICIONAL IF
		SET @idturno = 20
		SELECT * FROM Paciente WHERE idpaciente = @idpaciente
		PRINT @idturno
		PRINT @idpaciente
		IF EXISTS(SELECT * FROM Paciente WHERE idpaciente = 7)
			PRINT 'EXISTE'
END -- FINALIZA EL BLOQUE DE INSTRUCCIONES PARA EL CONDICIONAL IF