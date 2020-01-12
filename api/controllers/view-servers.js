module.exports = {


  friendlyName: 'View servers',


  description: 'Display "Servers" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/server'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
