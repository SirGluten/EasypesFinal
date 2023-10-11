var pool = require('./bd');

//Request

async function getRecetas(tipo){
    var query = "select * from ? order by id_recipe desc";
    var rows = await pool.query(query,[tipo]);
    return rows;
}

async function getRecetaById(id){
    var query = "select * from recetas where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//Delete

async function deleteRecetaById(id){
    var query = "delete from recetas where id_recipe = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}

//Create

async function insertReceta(obj){
    try{
        var query = "insert into recetas set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

//Update

async function modificarRecetaId(obj, id){
    try{
        var query = "update receta set ? where id_recipe = ?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
    }catch(error){
        throw error;
    }
}

module.exports = {getRecetas,deleteRecetaById,getRecetaById,insertReceta,modificarRecetaId}