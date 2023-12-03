const db = require('./db')

async function getStoreIn(local){
    const sql = `select street_addr, name, phone from store where street_addr like ? or address like ?`;
    local = `%${local}%`
    const results = await db.query(sql, [local,local]);

    if(!results)
        return [];
    else
        return results;
}

module.exports={
    getStoreIn
}