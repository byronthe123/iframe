jQuery(document).ready(function( $ ) {

    const videoArray = [
        'Kt9ixcIzmNw',
        'dgAtDw9s4wY',
        'wnr6N00nECU',
        'bsHbuWTZwpA'
    ];

    let index = 0;

    setInterval(() => {

        index += 1;

        if (index > 3) {
            index = 0;
        }

        const code = videoArray[index];

        $('.my-video').attr('src', `https://www.youtube.com/embed/${code}?autoplay=1`);
    }, 900000);
  });