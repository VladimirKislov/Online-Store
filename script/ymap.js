document.addEventListener('DOMContentLoaded', function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("ymap", {
      center: [55.75446383721533, 37.62844087026972],
      zoom: 15,
      controls: [],
    });
    var myPlacemark = new ymaps.Placemark([55.750615568993275, 37.64180899999995], {
      balloonContent: `
        <div class="balloon">
          <h3 class="balloon__title">SitDownPls на Солянке </h3>
          <p class="balloon__address">м. Китай-город, ул. Солянка, д.24</p>
          <div class="balloon__contact">
            <svg class="balloon__contact-svg" width="18" height="18" viewBox="0 0 18 18" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z"
                fill="#FF862F" />
            </svg>
            <p class="balloon__contact-phone">+7 (495) 885-45-47</p>
          </div>
          <p class="balloon__time">
            <span class="balloon__time-text">Часы работы</span>: с 10:00 до 21:00
          </p>
          <p class="balloon__description">
            <span class="balloon__description-text">Что здесь:</span>шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
          </p>
        </div>
      `
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../image/svg/elefant1.svg',
      iconImageSize: [32, 22],
      iconImageOffset: [-15, -15]
    });

    var myPlacemarkTwo = new ymaps.Placemark([55.759091068985285, 37.64497999999997], {
      balloonContent: `
        <div class="balloon">
          <h3 class="balloon__title">SitDownPls на Покровке </h3>
          <p class="balloon__address">м. Курская, ул. Покровка, д.14</p>
          <div class="balloon__contact">
            <svg class="balloon__contact-svg" width="18" height="18" viewBox="0 0 18 18" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z"
                fill="#FF862F" />
            </svg>
            <p class="balloon__contact-phone">+7 (495) 885-45-47</p>
          </div>
          <p class="balloon__time">
            <span class="balloon__time-text">Часы работы</span>: с 10:00 до 21:00
          </p>
          <p class="balloon__description">
            <span class="balloon__description-text">Что здесь:</span>шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
          </p>
        </div>
      `
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../image/svg/elefant1.svg',
      iconImageSize: [32, 22],
      iconImageOffset: [-15, -15]
    });

    myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkTwo);

    myMap.behaviors.disable(['scrollZoom']);
  }
}())
