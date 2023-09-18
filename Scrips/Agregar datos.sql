-- CONSULTAR DATOS
SELECT * FROM Paciente

-- INSERTAR DATOS
INSERT INTO Paciente (dni,nombre,apellido,fNacimiento,domicilio,idPais,telefono,email,observacion)
VALUES ('23423424','Lucas','Paredes','1985-07-22','Calle falsa 123','ARG','32423','lucas@gmail.com','')

-- INSERTAR VARIOS DATOS
INSERT INTO Paciente (dni,nombre,apellido,fNacimiento,domicilio,idPais,telefono,email,observacion)
VALUES ('234234','Lucia','Paredes','1945-07-22','Calle falsa 123','ARG',NULL,'lucia@gmail.com',''),
('2342332','Carlos','Ponen','1965-02-23','Calle verde','MEX',NULL,'cponen@gmail.com','')