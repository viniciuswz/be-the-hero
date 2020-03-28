const connection = require('../database/connection');
const crypto = require('crypto'); 
module.exports = {
    async index(request,response){
        const result = await connection('ongs').select('*');
        response.json(result);
    },
    async create(request,response){
        const {name, email, UF, whatsapp, city} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
          id,
          name,
          email,
          UF,
          whatsapp,
          city
        })
        response.json({id});
    }
}