require(['util/holidayInfo', 'header'], function(holidayInfo, header) {

    let holidayGridItems = '';

    holidayInfo.forEach(holiday => {
        holidayGridItems += `<section class="tripcard">
            <img class="tripimage" src="images/${holiday.image}.jpg">
            <div class="tripdescription">${holiday.name}: ${holiday.description}</div>
        </section>`;
    });

    let holidayList = '';

    holidayInfo.forEach(holiday => {
        holidayList += `<li><a href="${holiday.location}.html">${holiday.name}</a></li>`;
    });

    $(document).ready(function() {
        $(function(){
            $("#includeFooter").load("footer.html");
        });

        $(function(){
            $("#includeHeader").load("header.html", function() {
                $('.dropdown-content ul').html(holidayList);
            });
        });

        $(function() {
            $('#grid').html(holidayGridItems);
        });
    });
    
});
