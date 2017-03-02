var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phone_regex = /^\d{10}$/;
var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
$(document).ready(function(){
    $('#datepicker').keypress(function(key) {
        if(key) return false;
    });
    $('#phone').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });
    $("#myform").submit(function(e){
        e.preventDefault();
        $('#myform input').each(function() {
            if ($(this).val() == '') {
                this.focus();
                return false;
            }
        });
        var firstname=$('#Firstname').val();
        var lastname=$('#lastname').val();
        var email=$('#email').val();
        var password=$('#inputPassword3').val();
        var datepicker=$('#datepicker').val();
        var gender=$("input[name=sampleinlineradio]:checked");
        var country=$('input[name="countrySelectBox"]').val();
        var phone=$('#contactno').val();
        var contactemail=$('#contactemail').val();
        var interest=$('#tags').val();
        var a,b;
        a=0;
        b=0;
        if (firstname.length == 0)
        {
            $('#error_firstname').text("*This field is required *");
            $("#Firstname").addClass('error');
            $("#firstnamelabel").addClass('as');
            a=a+1;
        }
        else if(!(firstname))
        {
            $('#error_firstname').text("*Please fill Correct Name");
            $("#Firstname").addClass('error');
            $("#firstnamelabel").addClass('as');
            a=a+1;
        }
        else
        {
            $('#error_firstname').text("");
            $("#Firstname").addClass('not-error');
            $("#firstnamelabel").addClass('not-label');
        }
        if(lastname.length == 0)
        {
            $('#error_lastname').text("*This field is required *");
            $("#lastname").addClass('error');
            $("#lastnamelabel").addClass('as');
            a=a+1;
        }
        else if(!(lastname))
        {
            $('#error_lastname').text("*Please fill correct Name*");
            $("#lastname").addClass('error');
            $("#lastnamelabel").addClass('as');
            a=a+1;
        }
        else
        {
            $('#error_lastname').text("");
            $("#lastname").addClass('not-error');
            $("#lastnamelabel").addClass('not-label');
        }
        if(email.length==0)
        {
            $('#error_email').text("*This field is required");
            $("#email").addClass('error');
            $("#emaillabel").addClass('as');
            a=a+1;
        }
        else if(!email.match(email_regex))
        {
            $('#error_email').text("*Please enter a valid email address");
            $("#email").addClass('error');
            $("#emaillabel").addClass('as');
            a=a+1;
        }
        else
        {
            $('#error_email').text("");
            $("#email").addClass('not-error');
            $("#emaillabel").addClass('not-label');
        }
        if(!(password))
        {
            $('#error_password').text("This field is required");
            $("#inputPassword3").addClass('error');
            $("#passwordlabel").addClass('as');
            a=a+1;
        }
        else
        {
            $('#error_password').text("");
            $("#inputPassword3").addClass('not-error');
            $("#passwordlabel").addClass('not-label');
        }
        if(!datepicker)
        {
            $('#error_datepicker').text("*This field is required");
            $("#datepicker").addClass('error');
            $("#doblabel").addClass('as');
            a=a+1;
        }
        else if (!datepicker.match(date_regex))
        {
            $('#error_datepicker').text("*Enter a valid date");
            $("#datepicker").addClass('error');
            $("#doblabel").addClass('as');
            a=a+1;
        }
        else
        {
            $('#error_datepicker').text("");
            $("#datepicker").addClass('not-error');
            $("#doblabel").addClass('not-label');
        }
        if(!gender.val())
        {
            $('#error_gender').text("*This field is required");
            $("#gender").addClass('error');
            $("#genderlabel").addClass('as');
            a=a+1;
        }
        else
        {
            $('#error_gender').text("");
            $("#gender").addClass('not-error');
            $("#genderlabel").addClass('not-label');
        }
        if(country.length==0)
        {
            $('#error_country').text("*This field is required");
            $("#country").addClass('error');
            $("#countrylabel").addClass('as');
            a=a+1;
        }
        else
        {
            $('#error_country').text("");
            $("#country").addClass('not-error');
            $("#countrylabel").addClass('not-label');
        }

        if(phone.length==0)
        {
            $('#error_phoneno').text("*This field is required");
            $("#contactno").addClass('error');
            $("#contactnolabel").addClass('as');
            b=b+1;
        }
        else if(!phone.match(phone_regex))
        {
            $('#error_phoneno').text("Please use numbers only and digits cant be greater than 10");
            $("#contactno").addClass('error');
            $("#contactnolabel").addClass('as');
            b=b+1;
        }
        else
        {
            $('#error_phoneno').text("");
            $("#contactno").addClass('not-error');
            $("#contactnolabel").addClass('not-label');
        }
        if(contactemail.length==0)
        {
            $('#error_contactemail').text("*This field is required");
            $("#contactemail").addClass('error');
            $("#contactemaillabel").addClass('as');
            b=b+1;
        }
        else if(!contactemail.match(email_regex))
        {
            $('#error_contactemail').text("*Please enter a valid email address");
            $("#contactemail").addClass('error');
            $("#contactemaillabel").addClass('as');
            b=b+1;
        }
        else
        {
            $('#error_contactemail').text("");
            $("#contactemail").addClass('not-error');
            $("#contactemaillabel").addClass('not-label');
        }
        if(!(interest))
        {
            $('#error_interest').text("*This field is required");
            $("#tags").addClass('error');
            $("#interestlabel").addClass('as');
            b=b+1;

        }
        else
        {
            $('#error_interest').text("");
            $("#tags").addClass('not-error');
            $("#interestlabel").addClass('not-label');
        }
        if(a==0)
            {
                $("#tabs").tabs("option", "active", 2);
            }
            else
            {
                $("#tabs").tabs("option", "active", 0);
            }



        return false;
    });
});

$(document).ready(function(){
    $("#Firstname").blur(function(){
        var firstname=$('#Firstname').val();
        if (firstname.length == 0)
        {
            $('#error_firstname').text("*This field is required *");
            $("#Firstname").addClass('error');
            $("#firstnamelabel").addClass('as');
        }
        else if(!(firstname))
        {
            $('#error_firstname').text("*Please fill Correct Name");
            $("#Firstname").addClass('error');
            $("#firstnamelabel").addClass('as');
        }
        else
        {
            $('#error_firstname').text("");
            $("#Firstname").addClass('not-error');
            $("#firstnamelabel").addClass('not-label');
        }
    });
});
$(document).ready(function(){
    $("#lastname").blur(function(){
        var lastname=$('#lastname').val();
        if(lastname.length == 0)
        {
            $('#error_lastname').text("*This field is required *");
            $("#lastname").addClass('error');
            $("#lastnamelabel").addClass('as');
        }
        else if(!(lastname))
        {
            $('#error_lastname').text("*Please fill correct Name*");
            $("#lastname").addClass('error');
            $("#lastnamelabel").addClass('as');
        }
        else
        {
            $('#error_lastname').text("");
            $("#lastname").addClass('not-error');
            $("#lastnamelabel").addClass('not-label');
        }
    });
});
$(document).ready(function(){
    $("#email").blur(function(){
        var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email=$('#email').val();
        if(email.length==0)
        {
            $('#error_email').text("*This field is required");
            $("#email").addClass('error');
            $("#emaillabel").addClass('as');
        }
        else if(!email.match(email_regex))
        {
            $('#error_email').text("*Please enter a valid email address");
            $("#email").addClass('error');
            $("#emaillabel").addClass('as');
        }
        else
        {
            $('#error_email').text("");
            $("#email").addClass('not-error');
            $("#emaillabel").addClass('not-label');
        }
    });
});
$(document).ready(function(){
    $("#inputPassword3").blur(function(){
        var password=$('#inputPassword3').val();
        if(!(password))
        {
            $('#error_password').text("This field is required");
            $("#inputPassword3").addClass('error');
            $("#passwordlabel").addClass('as');
        }
        else
        {
            $('#error_password').text("");
            $("#inputPassword3").addClass('not-error');
            $("#passwordlabel").addClass('not-label');
        }
    });
});

$(document).ready(function(){
    $("#datepicker").blur(function(){
        var datepicker=$('#datepicker').val();
        if(!datepicker)
        {
            $('#error_datepicker').text("*This field is required");
            $("#datepicker").addClass('error');
            $("#doblabel").addClass('as');
        }
        else if (!datepicker.match(date_regex))
        {
            $('#error_datepicker').text("*Enter a valid date");
            $("#datepicker").addClass('error');
            $("#doblabel").addClass('as');
        }
        else
        {
            $('#error_datepicker').text("");
            $("#datepicker").addClass('not-error');
            $("#doblabel").addClass('not-label');
        }
    });
});

$(document).ready(function(){
    $('input[name="countrySelectBox"]').blur(function(){
        var country=$('input[name="countrySelectBox"]').val();
        if(country.length==0)
        {
            $('#error_country').text("*This field is required");
            $("#country").addClass('error');
            $("#countrylabel").addClass('as');
        }
        else
        {
            $('#error_country').text("");
            $("#country").addClass('not-error');
            $("#countrylabel").addClass('not-label');
        }
    });
});
$(document).ready(function(){
    $("#contactno").blur(function(){
        var phone=$('#contactno').val();
        if(phone.length==0)
        {
            $('#error_phoneno').text("*This field is required");
            $("#contactno").addClass('error');
            $("#contactnolabel").addClass('as');
        }
        else if(!phone.match(phone_regex))
        {
            $('#error_phoneno').text("Please use numbers only and digits cant be greater than 10");
            $("#contactno").addClass('error');
            $("#contactnolabel").addClass('as');
        }
        else

        {
            $('#error_phoneno').text("");
            $("#contactno").addClass('not-error');
            $("#contactnolabel").addClass('not-label');
        }
    });
});
$(document).ready(function(){
    $("#contactemail").blur(function(){
        var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var contactemail=$('#contactemail').val();
        if(contactemail.length==0)
        {
            $('#error_contactemail').text("*This field is required");
            $("#contactemail").addClass('error');
            $("#contactemaillabel").addClass('as');
        }
        else if(!contactemail.match(email_regex))
        {
            $('#error_contactemail').text("*Please enter a valid email address");
            $("#contactemail").addClass('error');
            $("#contactemaillabel").addClass('as');
        }
        else
        {
            $('#error_contactemail').text("");
            $("#contactemail").addClass('not-error');
            $("#contactemaillabel").addClass('not-label');
        }
    });
});
$(document).ready(function(){
    $("#tags").blur(function(){
        var interest=$('#tags').val();
        if(!(interest))
        {
            $('#error_interest').text("*This field is required");
            $("#tags").addClass('error');
            $("#interestlabel").addClass('as');
        }
        else
        {
            $('#error_interest').text("");
            $("#tags").addClass('not-error');
            $("#interestlabel").addClass('not-label');
        }
    });
});
