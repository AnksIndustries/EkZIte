$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        enablePagination: false,
        transitionEffectSpeed: 500,
        labels: {
            current: ""
        }
    });

    // Custome Button Jquery Step
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })

    // Date Picker
    var dp1 = $('#dp1').datepicker().data('datepicker');
    dp1.selectDate(new Date());
    
    
    

    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    })    
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
})


