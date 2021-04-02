function locateContainer() {
  const container = document.getElementById('content');
  return container;
};

function createElement(type, style) {
  const element = document.createElement(type);
  element.setAttribute('class', style);
  return element;
};

function findElement(classname) {
  const element = document.querySelector(`.${classname}`);
  return element;
}

function removeElement(classname) {
  const element = findElement(classname);
  element.remove();
} 

function activateNavElement(navElement) {
  const element = document.querySelector(`.${navElement}`);
  element.classList.toggle('active');
}

function addEvent(navElement, func) {
  const element = document.querySelector(`.${navElement}`);
  element.addEventListener('click', function() {
    func(navElement);
  }, true);
}

function removeEvent(navElement, func) {
  navElement.removeEventListener('click', function() {
    func(navElement);
  }, true);
}

function findSection(toggler) {
  console.log(toggler);
  const element = document.querySelector(`[data-toggle="${toggler}"]`);
  return element;
}

function toggleShowSection(toggler) {
  const element = findSection(toggler);
  element.classList.toggle('show');
}

function showSection(toggler) {
  toggleShowSection(toggler);
  eventHandler();
  activateNavElement(toggler);
}

function eventHandler() {
  let tabs = findTabs();
  tabs.forEach(tab => {
    if (tab.classList.contains('active')) {
      tab.classList.toggle('active');
      removeEvent(tab, showSection);
      toggleShowSection(tab.classList[0]);
    }
  });
}

function findTabs() {
  return document.querySelectorAll('[data-type="nav"]');
}

export {
  locateContainer,
  createElement,
  removeElement,
  addEvent,
  showSection
};