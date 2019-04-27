module.exports = {
  up: (queryInterface) => 
   ( queryInterface.bulkInsert('user', [{
    user_id: 1, 
    user_name:"Test User",
    email:"test@gmail.com",
    country_id: 1, 
    client_id: 1,
    created_at: new Date(), 
    updated_at: new Date(),
    },
    {
      user_id: 2, 
      user_name:"Test User",
      email:"ram4168@gmail.com",
      country_id: 1, 
      client_id: 1,
      created_at: new Date(), 
      updated_at: new Date(),
      }]
  )),
  down: (queryInterface) =>  
  (queryInterface.bulkDelete('user', null, {})),
};
