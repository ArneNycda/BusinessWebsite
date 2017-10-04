const holidayInfo = [
    {
        location: 'paris',
        name: 'Paris',
        description: 'City of Love',
        image: 'parisbg'
    },
    {
        location: 'amsterdam',
        name: 'Amsterdam',
        description: 'Tour the Canals',
        image: 'amsterdambg'
    },
    {
        location: 'london',
        name: 'London',
        description: 'The Largest European City',
        image: 'londonbg'
    }
];

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
