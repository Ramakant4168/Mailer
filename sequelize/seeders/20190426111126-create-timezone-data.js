module.exports = {
  up: (queryInterface) => 
   ( queryInterface.bulkInsert('timezone', [{
    offset_id: 1, 
    offset: "+07:30", 
    created_at: new Date(), 
    updated_at: new Date(),
    }]
  )),
  down: (queryInterface) =>  
  (queryInterface.bulkDelete('timezone', null, {})),
};
