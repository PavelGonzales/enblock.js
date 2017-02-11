export default (elem) => {

  const elems = Array.prototype.slice.call(elem.children); // Делаем из коллекции детей массив
  let data = [];

  elems.forEach((item, i) => {
    data.push({
      name: 'block-' + (i + 1),
      height: item.offsetHeight
    });
  });

  detectScrollDirection();
};

function detectScrollDirection() {
  let oldValue = 0;
  let direction;
  window.onscroll = () => {
    let newValue = window.pageYOffset || document.documentElement.scrollTop;
    if (newValue > oldValue) {
      direction = 1; // Скролим вниз
    } else {
      direction = -1; // Скролим вверх
    }
    oldValue = newValue;

    console.log(direction);
    return direction; 
  };
};
