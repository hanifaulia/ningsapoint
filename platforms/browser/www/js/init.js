(function($) {
    $(function() {

        $('.button-collapse').sideNav({
            menuWidth: 240, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

        $('.carousel.carousel-slider').carousel({ full_width: true });
        $('ul.tabs').tabs('select_tab', 'tab_id');
        $('.modal').modal();



    }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function() {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

});