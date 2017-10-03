const holidayInfo = [
    {
        location: 'paris',
        name: 'Paris',
        description: 'text1',
        image: 'parisbg'
    },
    {
        location: 'amsterdam',
        name: 'Amsterdam',
        description: 'text2',
        image: 'amsterdambg'
    },
    {
        location: 'london',
        name: 'London',
        description: 'text3',
        image: 'londonbg'
    },
    {
        location: 'paris',
        name: 'Paris',
        description: 'text1',
        image: 'parisbg'
    },
    {
        location: 'amsterdam',
        name: 'Amsterdam',
        description: 'text2',
        image: 'amsterdambg'
    },
    {
        location: 'london',
        name: 'London',
        description: 'text3',
        image: 'londonbg'
    }
];

let holidayGridItems = '';

holidayInfo.forEach(holiday => {
    holidayGridItems += `<section class="tripcard">
        <img class="tripimage" src="images/${holiday.image}.jpg">
        <div class="tripdescription">${holiday.name}</div>
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
