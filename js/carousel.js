

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, msg, link) {
        this._image = image
        this._msg = msg
        this._link = link
    }


    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        let sequencia = Carousel._sequence
        let image = document.querySelector('#carousel-img')
        let mensagem = document.querySelector('#carousel-title')

        image.src = carouselArr[sequencia]._image
        mensagem.innerHTML = carouselArr[sequencia]._msg

        Carousel._sequence++
        if (Carousel._sequence == Carousel._size) {
            Carousel._sequence = 0
        }
    }
};
