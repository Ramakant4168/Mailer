module.exports = {
  up: (queryInterface) =>
    (queryInterface.bulkInsert('timezone', [{
        offset_id: 1,
        offset: "+05:30",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        offset_id: 2,
        offset: "+06:30",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        offset_id: 3,
        offset: "-11:00",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        offset_id: 4,
        offset: "+12:45",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])),
  down: (queryInterface) =>
    (queryInterface.bulkDelete('timezone', null, {})),
};