/**
 * ServersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getServers: async function (req, res) {
        return res.send('Hi there!');
      }

};

