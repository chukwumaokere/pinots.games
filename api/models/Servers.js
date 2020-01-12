/**
 * Servers.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id: {
      type: "number",
      columnName: 'id',
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: "string",
      columnName: "server_name",
    },
    description: {
      type: "string",
      columnName: "server_desc",
    },
    hostname: {
      type: "string",
      columnName: "server_hostname",
    },
    server_type: {
      type: "string",
      columnName: "server_type",
    },
    max_online: {
      type: "number",
      columnName: "server_max_online",
    },
    status: {
      type: "boolean",
      columnName: "server_status",
      defaultsTo: true,
    },
    status_url: {
      type: "string",
      columnName: "server_status_url",
    },
    public: {
      type: "boolean",
      columnName: "public",
      defaultsTo: true
    },
    last_updated:{
      type: "string",
      columnName: "last_updated",
    },
    last_online: {
      type:"string",
      columnName: "last_online",
      allowNull: true,
    },
    date_created: {
      type: "string",
      columnName: "date_created",
    },
    requires_password: {
      type: "boolean",
      columnName: "requires_password",
      defaultsTo: true,
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

