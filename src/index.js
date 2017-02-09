export default (elem) => {

  const elems = Array.prototype.slice.call(elem.children); // Делаем из коллекции детей массив
  let data = [];

  elems.forEach((item, i) => {
    data.push({
      name: 'block-' + (i + 1),
      height: item.offsetHeight
    });
  });
  console.log(data);
};
