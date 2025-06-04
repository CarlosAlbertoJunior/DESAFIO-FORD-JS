//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
  constructor(image, msg, link) {
    this._image = image;
    this._msg = msg;
    this._link = link;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next(); //start
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 2000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    let sequencia = Carousel._sequence;

    let image = document.getElementById("carousel-img");
    let mensagem = document.getElementById("carousel-title");
    let link = document.getElementById("carousel-link");

    image.src = carouselArr[sequencia]._image;
    mensagem.innerHTML = carouselArr[sequencia]._msg;
    link.href = carouselArr[sequencia]._link;

    Carousel._sequence++;
    if (Carousel._sequence == Carousel._size) {
      Carousel._sequence = 0;
    }
  }
}
