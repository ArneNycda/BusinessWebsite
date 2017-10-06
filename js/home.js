require(['util/holidayInfo', 'util/reviews'], function(holidayInfo, reviews) {

    let holidayGridItems = '';

    holidayInfo.forEach(holiday => {
        holidayGridItems += `<section class="tripcard">
            <a href="#${holiday.location}" class="contentLink"><img class="tripimage" src="images/${holiday.image}.jpg"></a>
            <div class="tripdescription">${holiday.name}: ${holiday.description}</div>
        </section>`;
    });

    let holidayList = '';

    holidayInfo.forEach(holiday => {
        holidayList += `<li><a href="#${holiday.location}" class="contentLink">${holiday.name}</a></li>`;
    });

    let reviewList = '';

    reviews.forEach((review, index) => {
        const arrowPosition = index % 2 === 0 ? 'left' : 'right';
        const stars = `${'&#9733'.repeat(review.rating)}${'&#9734'.repeat(5 - review.rating)}`;

        reviewList  += `<div class="reviewcontainer a${arrowPosition}">
                <p class="reviewtext"><em>${review.comment}</em>
                    <br />- ${review.name}
                    <br /><span class="rating">${stars}</p>
            </div>`;
    });

    $(document).ready(function() {
        $("#includeFooter").load("footer.html");

        const getContent = function(hash) {
            const location = hash.replace('#', '');

            if(location === 'home') {
                $("#includeMain").load('home.html', function() {
                    $('#grid').html(holidayGridItems);
                    $('#reviews').append(reviewList);
                });
            } else if (location === 'about') {
                $("#includeMain").load('about.html');
            } else {
                $(function(){
                    const holiday = holidayInfo.find(holiday => holiday.location === location);
                    let amentities = '';
                    holiday.amentities.forEach(amentity => {
                        amentities += `<li>${amentity}</li>`;
                    });
                    let descriptionLong = ''
                    holiday.descriptionLong.forEach(paragraph => {
                        descriptionLong += `<p>${paragraph}</p>`;
                    });
                    const content = `<section id="gallery">
                            <h2>${holiday.name}</h2>
                            <img class="imageBig" src="images/${holiday.image}.jpg" alt="Picture1">
                            <img class="imageSmall" src="images/${holiday.location}2.jpg" alt="Picture2">
                            <img class="imageSmall" src="images/${holiday.location}3.jpg" alt="Picture3">
                            <img class="imageSmall" src="images/${holiday.location}4.jpg" alt="Picture4">
                        </section>

                        <div id="trip">
                            <section id="descriptionLong">
                                <h2>Description</h2>
                                ${descriptionLong}</section>
                            <section id="amenities">
                                <h2>What we offer</h2>
                                <ul>
                                    ${amentities}
                                </ul>
                            </section>
                            <section id="howtobook">
                                <button id="booknow">Book Now!</button>
                            </section>
                        </div>`;

                    $("#includeMain").html(content);
                });
            }
        }

        $("#includeHeader").load("header.html", function() {
            $('.dropdown-content ul').html(holidayList);
        });

        $(function(){
            const location = window.location.hash === '' ? 'home' : window.location.hash;

            getContent(location);
        });

        $(window).on('hashchange', function() {
            getContent(window.location.hash);
        });
    });
    
});
