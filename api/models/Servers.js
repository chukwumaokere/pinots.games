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
    },
    server_image: {
      type: "string",
      columnName: "server_image",
      defaultsTo: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f96c8231e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f96c8231e%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

