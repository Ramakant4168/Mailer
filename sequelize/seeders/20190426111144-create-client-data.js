module.exports = {
  up: (queryInterface) => 
   ( queryInterface.bulkInsert('client', [{
    client_id: 1, 
    client_name:"Test",
    created_at: new Date(), 
    updated_at: new Date(),
    }]
  )),
  down: (queryInterface) =>  
  (queryInterface.bulkDelete('client', null, {})),
};
