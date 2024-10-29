#API products


##RECUPERAR TODOS LOS PRODUCTOS

URL:/api/products
METODO: GET
HEADERS: X
BODY: X

Respuesta:
-Un array con todos los productos

¿ Qué podemos probar ?
-Recibo un status 200
-Recibo un JSON como respuesta
-Recibo un array de productos

##CREACION DE UN PRODUCTO

URL:/api/products
METODO: POST
HEADERS: X
BODY: name, descripcion, departamento, precio , stock available

Respuesta:
-El nuevo producto creado

¿ Qué podemos probar ?
- que la URL funcione: status -> 201 y Content-Type: application/json
- comprobar que en la respuesta tenemos el _id
- comprobar que los campos que enviamos en el body son los que se gusradn en el documento de la BD

## MAS RUTAS
-GET /api/products/<PRODUCTID>- retorna un producto a partir de si ID
-GET/api/products/dpt/<DEPARTMENT>- retorna todos los productos de un departamento
-GET/api/products/price?min<>