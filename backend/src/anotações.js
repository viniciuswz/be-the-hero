/**
*  Entenndendo sobre rotas e recursos:
*  exemplo: URL: https://localhost:3333/users
*  ----------------------------------------------------------------------
*                  Rota              |              Recurso              |
*  ----------------------------------------------------------------------
*  é url completa                    |  A partir do primeiro path da url |
*  https://localhost:3333/users      |  /users                           |
*  -----------------------------------------------------------------------
*/

routes.get('/users',(request,response)=>{
    return response.json({texto:'olá mundo'});
});



/**
 * Metodos de URL ?
 * GET
 * POST
 * PUT
 * DELETE
 * 
 * são auto explicativos >:)
 */


routes.post('/users',(request,response)=>{
    return response.json({post:'testando método post'});
});

/**
 * tipos de paramentros
 * 
 * Query Params => ?uam=true&mobile=4 (filtros,paginação)
 * Route Params => url/users/1 (indenficar um único recurso)
 * Request Body => corpo da req, cria ou altera recursos
 *
 */


 /**
  * Exemplo do query
  * http://localhost:3333/query?uam=true
  */
 routes.get('/query',(request,response)=>{
    const params = request.query;
    response.json(params);
 });

 /**
  * Exemplo do route
  * http://localhost:3333/route/1
  */

  routes.get('/route/:id/:categoria',(request,response)=>{
    const params = request.params;
    response.json(params)
  });

  /**
   * exemplo com o request body
   */

  routes.post('/create',(request,response)=>{
    const params = request.body;
    response.json(params);
  });

  /**
   * npm install nodemon -D
   * npm install knex
   * npm install sqlite3
   * npx knex init
   * npx knex migrate:make nome_migrate
   * npx knex migrate:latest
   */
