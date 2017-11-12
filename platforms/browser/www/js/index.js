(function($) {
    $(function() {

        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

        $('.carousel.carousel-slider').carousel({ full_width: true });
        $('ul.tabs').tabs('select_tab', 'tab_id');


    }); // end of document ready
})(jQuery); // end of jQuery name space