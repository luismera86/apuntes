
-- STORE PROCEDURE: Es un conjunto de instrucciones SQL que está almacenado internamente en SqlServer y está disponible
-- para cuando querramos usarlo, estan diseñados para realizar acciones o multiples acciones concretas
-- por lo general usamos un store procedure para un proceso de agregado, actualización y eliminación de datos


-- ESTRUCTURA DEL STORE PROCEDURE
CREATE PROC S_PACIENTE (
	@idpaciente int -- VARIABLE QUE VA A RECIBIR EL SP
)-- PARAMETROS QUE RECIBE EL SP
AS -- LUEGO DEL AS SE COLOCA LA INSTRUCCION QUE VA A REALIZAR

SELECT * FROM Paciente WHERE idpaciente = @idpaciente

GO -- SE USA PARA FINALIZAR LA INSTRUCCION DEL SP

/****** Object:  StoredProcedure [dbo].[S_PACIENTE]    Script Date: 19/9/2023 01:58:09 ******/
SET ANSI_NULLS ON -- INDICA QUE NO ME VA A DEVOLVER LOS VALORES QUE ESTEN EN NULL
GO
SET QUOTED_IDENTIFIER ON -- INDICA QUE PUEDO GUARDAR NOMBRES DE TABLAS CON COMILLAS DOBLES
GO