let selectedValueList1 = '';
let selectedValueList2 = '';

const list1Buttons = document.querySelectorAll('.list1-button');
const list2Buttons = document.querySelectorAll('.list2-button');
const resultElement = document.getElementById('result');

list1Buttons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedValueList1 = button.innerText;
    resultElement.textContent = compareValues();
  });
});

list2Buttons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedValueList2 = button.innerText;
    resultElement.textContent = compareValues();
  });
});

function compareValues() {
  if (selectedValueList1 && selectedValueList2) {
    if (selectedValueList1 === selectedValueList2) {
      return 'Both buttons have the same value.';
    } else {
      return 'Buttons have different values.';
    }
  } else {
    return 'Select a value from both lists.';
  }
}
