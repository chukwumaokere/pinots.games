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
    },
    getServer: async function(req, res){
        //sails.log(req.param('name'));
        var name = req.param('name');
        var query = `SELECT * FROM game_servers WHERE server_name = $1`;
        var rawResult = await sails.sendNativeQuery(query, [name]);
        var serverDetail = rawResult.rows[0];
        serverDetail.server_type = serverDetail.server_type.charAt(0).toUpperCase() + serverDetail.server_type.slice(1);
        sails.log(serverDetail);
        return res.view('pages/server', {serverInfo: serverDetail});
    }

};

