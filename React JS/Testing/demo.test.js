
describe('Pruebas en componente', () => { 

    test('Esta prueba no debe de fallar', () => { 

        // 1 Inicialización 
    
            const mensaje1 = 'Hola mundo'
    
        // 2 Estímulo

            const mensaje2 = 'Hola mundo'
    
        // 3 Observar el comportamiento... esperado 

            expect(mensaje1).toBe(mensaje2) // Si los dos mensajes son iguales pasa la prueba, sino tirar error
    
     })
 })


