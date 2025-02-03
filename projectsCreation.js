function projectsCreation(architect, projectCount) {
  let hours = projectCount * 3;

  console.log(
    `The architect ${architect} will need ${hours} hours to complete ${projectCount} project/s.`
  );
}
projectsCreation("George", 4);
