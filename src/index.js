export default (elem) => {

  const elems = Array.prototype.slice.call(elem.children); // Делаем из коллекции детей массив
  let data = [];

  elems.forEach((item, i) => {
    data.push({
      name: 'block-' + (i + 1),
      height: item.offsetHeight
    });
  });

  detectScrollDirection(); //eslint-disable-line
};

function detectScrollDirection() {
  let newValue = 0;
  let oldValue = 0;

  function newPosition() {
    newValue = window.pageYOffset || document.documentElement.scrollTop;
    return newValue;
  };
  function oldPosition() {
    oldValue = newPosition();
    return oldValue;
  };
  window.onscroll = () => {
    newPosition();
    oldPosition();
    console.log(newPosition(), oldPosition());
  };
};
