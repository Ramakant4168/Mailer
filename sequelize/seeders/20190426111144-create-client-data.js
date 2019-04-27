module.exports = {
  up: (queryInterface) =>
    (queryInterface.bulkInsert('client', [{
        client_id: 1,
        client_name: "Client 1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        client_id: 2,
        client_name: "Client 2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        client_id: 3,
        client_name: "Client 3",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])),
  down: (queryInterface) =>
    (queryInterface.bulkDelete('client', null, {})),
};