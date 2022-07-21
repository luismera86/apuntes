/* 

La proyección se utiliza para devolver un conjunto determinado de campos de un documento. En general devolvemos todos los campos de un documento, pero es posible que no necesitemos todos. 
Es equivalente en SQL de pasar de hacer un SELECT * a realizar SELECT nombrecampo. 
Las proyecciones deben ser incorporadas en el segundo parámetro del comando find. Por ej. db.coll.find({},{"nombre":1}) muestra sólo el campo nombre y el _id de todos documentos de la coll
Las proyecciones se realizan indicando el nombre del campo,
con valor 1 si queremos mostrarlo y 0 por el contrario.

//MongoDB: sort limit skip

sort( { campoA: 1 ó -1 , campoB: 1 ó -1 , ... } ) : Especifica el orden en el que la consulta devuelve documentos coincidentes. El ó los campos por los cuales ordena pueden contener los valores 1 y -1, estableciendo orden ascendente y descendente respectivamente. El orden se evalúa de izquierda a derecha en caso que los valores coincidan.
limit(num): Especifica el número máximo de documentos devueltos.
skip(offset) : Saltea la cantidad de documentos especificada.

Se pueden utilizar en forma combinada:
db.Employee.find().skip(2).limit(3).sort({Employeeid:-1})



*/