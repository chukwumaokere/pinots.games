module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {
    var user = this.req.me;
    var userid = user.id;

    var query = `SELECT * FROM user_servers INNER JOIN game_servers ON game_servers.id = user_servers.serverid  WHERE userid = $1 `;
    var rawResult = await sails.sendNativeQuery(query, [userid]);
    var servers = rawResult.rows;
    sails.log(servers);
    return {servers: servers};

  }


};
