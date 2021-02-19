
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_id: 1, project_name: 'alfa', project_description:"the first project",project_completed:true},
        {project_id: 2, project_name: 'bravo', project_description:"the second one",project_completed:true},
        {project_id: 3, project_name: 'charlie', project_description:"and the third one",project_completed:true}
      ]);
    });
};
