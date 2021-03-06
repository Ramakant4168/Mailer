module.exports = {
  up: (queryInterface) =>
    (queryInterface.bulkInsert('user', [{
        user_id: 1,
        user_name: "Test User 1",
        email: "test1@gmail.com",
        country_id: 1,
        client_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        user_name: "Test User 2",
        email: "test2@gmail.com",
        country_id: 3,
        client_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        user_name: "Test User 3",
        email: "test3@gmail.com",
        country_id: 4,
        client_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        user_name: "Test User 4",
        email: "test4@gmail.com",
        country_id: 3,
        client_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        user_name: "Test User 5",
        email: "test5@gmail.com",
        country_id: 1,
        client_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        user_name: "Test User 6",
        email: "test6@gmail.com",
        country_id: 2,
        client_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])),
  down: (queryInterface) =>
    (queryInterface.bulkDelete('user', null, {})),
};