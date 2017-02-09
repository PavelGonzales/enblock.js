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
  console.log(data);
};

const detectScrollDirection = () => {
  window.onscroll = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let prevPosition = 0;
    let result;

    if (prevPosition < scrolled) {
      result = 'down';
    }
    console.log(scrolled);
    return result;
  };
};
