

fetch('../js/oplossingen.json').then((res) => {
  const oplossingen_element = document.querySelector('.oplossingen');
  res.json().then(data => {
    let i = 1;
    data.forEach(element => {
      // Title div
      const section_title_element = document.createElement('div');
      section_title_element.classList.add('section__title');
      // Title
      const title_element = document.createElement('h1');
      title_element.innerHTML = `Oplossing #${i}`;
      section_title_element.appendChild(title_element);
      //Subtitle
      const subtitle_element = document.createElement('h2');
      subtitle_element.innerHTML = `${element.name}`;
      section_title_element.appendChild(subtitle_element);
      // Description
      const description_element = document.createElement('div');
      description_element.classList.add('section__description');
      description_element.innerHTML = `<p>${element.description}</p>`
      // Advantages
      const description_left_element = document.createElement('div');
      description_left_element.classList.add('section__description','section__description--left');
      const description_left_points_element = document.createElement('div');
      description_left_points_element.classList.add('points');
      element.advantages.forEach(advantage => {
        const description_left_points_advantage = document.createElement('h4');
        description_left_points_advantage.classList.add('points__item');
        description_left_points_advantage.innerHTML = `<small>+</small>${advantage}`;
        description_left_points_element.appendChild(description_left_points_advantage);
      });
      description_left_element.appendChild(description_left_points_element);
      // Disadvantages
      const description_right_element = document.createElement('div');
      description_right_element.classList.add('section__description','section__description--right');
      const description_right_points_element = document.createElement('div');
      description_right_points_element.classList.add('points');
      element.disadvantages.forEach(disadvantage => {
        const description_right_points_disadvantage = document.createElement('h4');
        description_right_points_disadvantage.classList.add('points__item');
        description_right_points_disadvantage.innerHTML = `<small>-</small>${disadvantage}`;
        description_right_points_element.appendChild(description_right_points_disadvantage);
      });
      description_right_element.appendChild(description_right_points_element);
      // Append children
      oplossingen_element.appendChild(section_title_element);
      oplossingen_element.appendChild(description_element);
      oplossingen_element.appendChild(description_left_element);
      oplossingen_element.appendChild(description_right_element);

      i++;
    });
  });
});