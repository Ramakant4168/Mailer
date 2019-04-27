module.exports = {
  up: (queryInterface) => 
   ( queryInterface.bulkInsert('location', [{
    country_id: 1, 
    country_name:"canada",
    offset_id: 1, 
    created_at: new Date(), 
    updated_at: new Date(),
    }]
  )),
  down: (queryInterface) =>  
  (queryInterface.bulkDelete('location', null, {})),
};
