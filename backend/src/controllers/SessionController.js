const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        var {ong_id} = request.body;

        const result = await connection('ongs')
        .where('id',ong_id)
        .select('name')
        .first()

        if(!result){
            return response.status().json({error: 'no ONG found with this ID'})
        }

        return response.json(result);
    }
}