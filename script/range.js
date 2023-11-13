var range = document.getElementById('range');

if (range) {
  noUiSlider.create(range, {
    start: [9000, 114000],
    connect: true,
    step: 100,
    range: {
      'min': 0,
      'max': 170000
    }
  });
  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  range.noUiSlider.on('update', function(values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRange = (item, value) => {
    let rangeArr = [null, null];
    rangeArr[item] = value;
    range.noUiSlider.set(rangeArr);
  }

  inputs.forEach((elem, index) => {
    elem.addEventListener('change', (e) => {
      setRange(index, e.currentTarget.value);
    })
  })
}

