'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Education',
        [
          {
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            educationLevel : "มัธยมศึกษา ",
            nameOfInstituteEducation: "อรุณศาน์วิทยามูลนิธิ",
            courseTakenCompleted: "ศาสนาและสามัญ",
            educationFrom: new Date(),
            educationTo: new Date(),
            
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Education', null);
  }
};