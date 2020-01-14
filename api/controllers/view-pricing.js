module.exports = {


  friendlyName: 'View pricing',


  description: 'Display "Pricing" page.',

  exits: {

    success: {
      viewTemplatePath: 'pages/pricing'
    }

  },


  fn: async function (req, res) {
    var query = `SELECT * FROM pricing WHERE active = 1 ORDER BY id ASC`;
    var rawResult = await sails.sendNativeQuery(query, []);
    var prices = rawResult.rows;
    sails.log(prices);
    //this.prices = prices; 
    // Respond with view.
    return {prices: prices};

  },
  getAllPricing: async function(req, res){
    
  }


};
