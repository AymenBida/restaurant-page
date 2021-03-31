function locateContainer() {
  const container = document.getElementById('content');
  return container;
};

function createElement(type, style) {
  const element = document.createElement(type);
  element.setAttribute('class', style);
  return element;
};

export { locateContainer, createElement };