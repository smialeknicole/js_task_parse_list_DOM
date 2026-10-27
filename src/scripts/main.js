'use strict';

function sortList (list){
  const employees = Array.from(document.querySelectorAll('li'));

  function formatNumber (salary) {
    const formated = salary.slice(1).replace(",", "");
    return Number(formated);
  }

  employees.sort((a, b) => {
    return (formatNumber(b.dataset.salary) - formatNumber(a.dataset.salary));
  });

  employees.forEach((item) => {
    list.append(item);
  });
}

const list = document.querySelector('ul');
sortList(list);
