require(['util/holidayInfo'], function(holidayInfo) {

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

    $(document).ready(function() {
        $(function(){
            $("#includeFooter").load("footer.html");
        });

        $(function(){
            const location = window.location.hash === '' ? 'home' : window.location.hash;

            getContent(location);
        });

        const getContent = function(hash) {
            const location = hash.replace('#', '');

            if(location === 'home') {
                $("#includeMain").load('home.html', function() {
                    $('#grid').html(holidayGridItems);
                });
            } else if (location === 'about') {
                $("#includeMain").load('about.html');
            } else {
                $(function(){
                    const holiday = holidayInfo.find(holiday => holiday.location === location);
                    const content = `<section id="gallery">
                            <h2>${holiday.name}</h2>
                            <div class="mySlides">
                                <img class="mainimage" src="images/${holiday.image}.jpg" alt="Picture1">
                            </div>  
                            
                            <div class="column"><img src="images/${holiday.image}.jpg" class="demo"></div>
                            <div class="column"><img src="images/${holiday.location}2.jpg" class="demo"></div>
                            <div class="column"><img src="images/${holiday.location}3.jpg" class="demo"></div>
                            <div class="column"><img src="images/${holiday.location}4.jpg" class="demo"></div>
                        </section>

                        <div id="trip">
                            <section id="tripdescription2">
                                <h2>Description</h2>
                                ${holiday.descriptionLong}</section>
                            <aside id="amenities">
                                <h2>What we offer</h2>
                                <ul>
                                    <li>4/5-Star Accomodation</li>
                                    <li>Free Wifi in all locations</li>
                                    <li>Pets Allowed</li>
                                    <li>Parking Facilities</li>
                                    <li>Airport Connections</li>
                                    <li>Guided Tours</li>
                                    <li>Our Detailed City Guide</li>
                                </ul>
                            </aside>
                            <section id="howtobook">
                                <button id="booknow">Book Now!</button>
                            </section>
                        </div>`;

                    $("#includeMain").html(content);
                });
            }

        }

        $("body").on('click', '.contentLink', function() {
            getContent($(this).attr('href'));
        });


        $(function(){
            $("#includeHeader").load("header.html", function() {
                $('.dropdown-content ul').html(holidayList);
            });
        });
    });
    
});
