async function getUser(username, pool) {
    if(pool.connected){
        let results = await pool.request()
            .input("Username", username)
            .execute("GetUserByUsername")
        let user = results.recordset[0]
        console.log(results.recordset[0])

        return user
    }
    
}

module.exports =  getUser 