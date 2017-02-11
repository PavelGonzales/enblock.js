export default (elem) => {

  const elems = Array.prototype.slice.call(elem.children); // Делаем из коллекции детей массив
  let data = [];

  elems.forEach((item, i) => {
    data.push({
      name: 'block-' + (i + 1),
      height: item.offsetHeight,
      top: item.offsetTop
    });
  });
  window.data = data;

  // console.log(data);
  wrap(elem);
  detectScrollDirection();
  detectBlockInSight(data);
};

function detectScrollDirection() {
  let oldValue = 0;
  let direction = false; 
  window.onscroll = () => {
    let newValue = window.pageYOffset || document.documentElement.scrollTop;
    if (newValue > oldValue) {
      direction = 1; // Скролим вниз
    } else {
      direction = -1; // Скролим вверх
    }
    oldValue = newValue;

    return direction; 
  };
};

function detectBlockInSight(data) {
  window.onscroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const halfScreen = windowHeight / 2;
    const scrollBottom = scrollTop + windowHeight;

    // console.log('top => ', scrollTop);
    // console.log('bottom => ', scrollBottom);

    if ( scrollTop < data[3].top && scrollBottom >= data[3].top + data[3].height ) {
      console.log(`${data[3].name} полностью в зоне видимости`);
    }
  }
};

function wrap(elem) {
  const wrap = document.createElement('div');
  const content = elem.innerHTML;
  wrap.className = 'enblock-wrap';
  elem.innerHTML = '';
  elem.appendChild(wrap);
  wrap.innerHTML = content;
};
