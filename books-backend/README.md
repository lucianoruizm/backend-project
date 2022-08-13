API de libros-

Se incluye un CRUD con las siguientes rutas:

GET http://localhost:3000/book/list
 Se visualiza la lista de libros agregados

POST http://localhost:3000/book/add
 Se agregan libros

PUT http://localhost:3000/book/edit/4  
 Como ejemplo se agrega un libro con el id 4, ya que por defecto existen 3 libros
 en un archivo json en la carpeta db.

DELETE http://localhost:3000/book/delete/2
 Ejemplo se elimina el archivo con id 2