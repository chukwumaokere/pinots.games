/**
 * ServersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    getServers: async function (req, res) {
        var query = `SELECT * FROM game_servers ORDER BY id DESC`;
        var rawResult = await sails.sendNativeQuery(query, []);
        var servers = rawResult.rows;
        sails.log(servers);
        return res.send(servers);
    },
    loadHomePage: async function(req, res){
        var query = `SELECT * FROM game_servers ORDER BY id DESC`;
        var rawResult = await sails.sendNativeQuery(query, []);
        var servers = rawResult.rows;
        sails.log(servers);
        return res.view('pages/homepage', {servers: servers});
    }

};

