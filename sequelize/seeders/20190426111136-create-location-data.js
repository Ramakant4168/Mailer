module.exports = {
  up: (queryInterface) =>
    (queryInterface.bulkInsert('location', [{
        country_id: 1,
        country_name: "India",
        offset_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        country_id: 2,
        country_name: "Myanmar",
        offset_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        country_id: 3,
        country_name: "American Samoa",
        offset_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        country_id: 4,
        country_name: "Nieu",
        offset_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])),
  down: (queryInterface) =>
    (queryInterface.bulkDelete('location', null, {})),
};