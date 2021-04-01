function locateContainer() {
  const container = document.getElementById('content');
  return container;
};

function createElement(type, style) {
  const element = document.createElement(type);
  element.setAttribute('class', style);
  return element;
};

function findSection(section) {
  const element = document.querySelector(`.${section}`);
  return element;
}

function removeSection(section) {
  const element = findSection(section);
  element.remove();
}

export { locateContainer, createElement, removeSection };