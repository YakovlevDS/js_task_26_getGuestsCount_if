
// *? Task: Гостиничное дело нелегкая штука. Особенно в наше время. Grand Mate Hotel обновил свой сайт для бронирования номеров. Наконец кроме номера телефона гостиницы появилась и форма для бронирования. В форме бронирования требуется ввести количество гостей. К сожалению, программисты сделали это поле текстовым и теперь отель получает результаты в виде "1 гость", "3", "Я и моя малая", "Двое гостей", "Где-то 6". Давай улучшим программное обеспечение гостиницы и напишем для них функцию getGuestsCount, которая будет принимать строку guestsInput и возвращать число гостей. Если количество гостей определить невозможно - возвращать строку not a number.
// "0 we won't visit you!!" вернуть 0
// Примеры:

// getGuestsCount('Двое') === 'not a number'
// getGuestsCount('Я буду 1') === 'not a number'
// getGuestsCount('3 человека') === 3

// Solution 1


const getGuestsCount = guestInput => {
  const numberGuests = parseInt(guestInput);

  if (!!numberGuests === true) {
    return numberGuests;
  };

  if (guestInput === "0 we won't visit you!!") {
    return 0;
  };

  return 'not a number';
};


console.log(getGuestsCount('Двое'));
console.log(getGuestsCount('Я буду 1'));
console.log(getGuestsCount('3 человека'));
console.log(getGuestsCount("0 we won't visit you!!"));
console.log(getGuestsCount('3 человека'));

// ! Explanation:Используем стрелочную функцию и parseInt if.