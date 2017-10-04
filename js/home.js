require(['util/holidayInfo'], function() {

    let holidayGridItems = '';

    holidayInfo.forEach(holiday => {
        holidayGridItems += `<section class="tripcard">
            <img class="tripimage" src="images/${holiday.image}.jpg">
            <div class="tripdescription">${holiday.name}: ${holiday.description}</div>
        </section>`;
    });

    $(document).ready(function() {
        $(function(){
          $("#includeFooter").load("footer.html");
        });

        $(function(){
          $("#includeHeader").load("header.html");
        });

        $(function() {
            $('#grid').html(holidayGridItems);
        });
    });
    
});
