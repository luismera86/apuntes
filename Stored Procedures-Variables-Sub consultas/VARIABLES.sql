
-- VARIABLES

-- DECLARAR UNA VARIABLE 
DECLARE @ordenamiento CHAR(1) = 'A' -- DECLARAMOS LA VARIABLE CON EL TIPO DE DATO CHAR(1) Y LA INICIALIZAMOS CON EL VALOR A

-- ASIGNAR UN VALOR A UNA VARIABLE 
SET @ordenamiento = 'D' -- EN CASO QUE QUIERAS MODIFICAR EL VALOR DE UNA VARIABLE O DARLE VALOR A UNA VARIABLE NO INICIALIZADA

-- USO DE ISNULL
DECLARE @ordenamiento1 CHAR(1)
DECLARE @valorOrdenamiento CHAR(1) -- DECLARAMOS LA VARIABLE SIN ASIGNARLE VALOR

SET @valorOrdenamiento = ISNULL(@ordenamiento1, 'A') -- ISNULL NOS DETECTA SI LA VARIABLE ESTA EN NULL LE ASIGNAMOS A

PRINT @valorOrdenamiento --NOS IMPRIME EL VALOR A QUE DEJAMOS EN EL ISNULL

-- Ejemplos para declarar Variables de distintos Tipos de Dato
-- Estos son algunos ejemplos sobre cómo declarar Variables de distintos Tipos de Datos y evaluar valores Nulos:



DECLARE @entero INT

SET @entero = NULL

SELECT ISNULL(@entero, 0) AS Valor



DECLARE @decimal DECIMAL(10,2)

SET @decimal = NULL

SELECT ISNULL(@decimal, 0.00) AS Valor



DECLARE @cadena VARCHAR(50)

SET @cadena = NULL

SELECT ISNULL(@cadena, 'Texto predeterminado') AS Valor



DECLARE @fecha DATETIME

SET @fecha = NULL

SELECT ISNULL(@fecha, GETDATE()) AS Valor



DECLARE @booleano BIT

SET @booleano = NULL

SELECT ISNULL(@booleano, 0) AS Valor



DECLARE @moneda MONEY

SET @moneda = NULL

SELECT ISNULL(@moneda, 0.00) AS Valor