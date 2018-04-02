function createWizardForm() {
    var $elem = '' +
    '<div style="position:fixed; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgba(0,0,0,0.85); z-index: 1030;" >' +
        '<form id="msform" class="col-md-6 col-md-offset-3">' +
            '<ul id="progressbar">' +
                '<li class="active">Account Setup</li>' +
                '<li>Social Profiles</li>' +
                '<li>Personal Details</li>' +
                //'<li>Extra Step</li>' +
                //'<li>Extra Step</li>' +
                //'<li>Personal Details</li>' +
            '</ul>' +
            //'<fieldset class="describe">' +
            //    '<h2 class="fs-title">What best describes you?</h2>' +
            //    '<h3 class="fs-subtitle">This is step 1</h3>' +
            //    '<div class="row jumbotron ">' +
            //        '<div class="col-md-2 col-md-offset-1"><div class="img-circle padding-10 color-bg-hover" data-id="1" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/WBDY/Working.png" /></div><div style="margin-top: 4px;">Work</div></div>' +
            //        '<div class="col-md-2"><div class="img-circle padding-10 color-bg-hover" data-id="2" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/WBDY/Study.png" /></div><div style="margin-top: 4px;">Study</div></div>' +
            //        '<div class="col-md-2"><div class="img-circle padding-10 color-bg-hover" data-id="3" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/WBDY/Business.png" /></div><div style="margin-top: 4px;">Buisness</div></div>' +
            //        '<div class="col-md-2"><div class="img-circle padding-10 color-bg-hover" data-id="4" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/WBDY/Non-Profit.png" /></div><div style="margin-top: 4px;">Non-profit</div></div>' +
            //        '<div class="col-md-2"><div class="img-circle padding-10 color-bg-hover" data-id="5" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/WBDY/MostlyFree.png" /></div><div style="margin-top: 4px;">Mostly free</div></div>' +
            //    '</div>' +

            //    '<input type="button" name="next" class="next action-button" value="Next" />' +
            //'</fieldset>' +

            '<fieldset class="user-expertise">' +
                '<h2 class="fs-title">Broadly speaking, What are your areas of expertise</h2>' +
                '<h3 class="fs-subtitle">This helps us in showing you relevant feeds</h3>' +
                '<div class="dropdown">' +
                    '<input type="text" style="margin-bottom: 0px" class="expertise" placeholder="Search here" onclick="searchOccupation(this);"/>' +
                    '<ul class="dropdown-menu" style="width: 100%">' +
                        '<li>Test</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="expertise-tag"></div>' +

                //'<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                '<input type="button" name="next" class="next action-button" value="Next" />' +
            '</fieldset>' +
            '<fieldset class="user-description">' +
                '<h2 class="fs-title">Write a brief sentence about yourself, interests or expertise.</h2>' +
                '<h3 class="fs-subtitle">This will be your profile description.</h3>' +
                '<textarea rows="4" placeholder="eg. Read mathematics, Love astronomy, Technology enthusiast, Blogger, Passionate about cooking, etc."></textarea>' +
                '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                '<input type="button" name="next" class="next action-button" value="Next" />' +
            '</fieldset>' +
            '<fieldset class="category">' +
                '<h2 class="fs-title">What categories are you most passionate about?</h2>' +
                //'<h3 class="fs-subtitle">We will never sell it</h3>' +
                '<div class="sf-step" id="category" ><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="1"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/01.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="2"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/02.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="3"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/03.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="4"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/04.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="5"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/05.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="6"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/06.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="7"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/07.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="8"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/08.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="9"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/09.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="10"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/10.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="11"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/11.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="12"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/12.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="13"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/13.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="14"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/14.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="15"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/15.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="16"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/16.png"><div class="check-wrapper"><div class="check"></div></div></div><div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="17"><img class="img-responsive" data-img-id="01" src="/assets/images/goals-images/17.png"><div class="check-wrapper"><div class="check"></div></div></div></div>' +
                '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                //'<input type="button" name="next" class="next action-button" value="Next" />' +
                '<input type="button" name="submit" class="submit action-button" value="Submit" onclick="updateUserDescription(this)"/>' +
            '</fieldset>' +
            // '<fieldset class="is-expert">' +
            //    '<h2 class="fs-title">Please tick this box if you think you are a better fit as an "Expert"</h2>' +
            //    '<h3 class="fs-subtitle">An expert\'s role is to respond constructively with the perspective to provide solutions on issue\'s posted.</h3>' +
            //    '<div class="row jumbotron">' +

            //        '<div class="col-md-2 col-md-offset-4"><div class="img-circle padding-10 color-bg-hover" data-id="1" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/professor.png" /></div><div style="margin-top: 4px;">Expert</div></div>' +
            //        '<div class="col-md-2"><div class="img-circle padding-10 color-bg-hover" data-id="0" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/male.png" /></div><div style="margin-top: 4px;">User</div></div>' +
            //    '</div>' +
            //    '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
            //    '<input type="button" name="next" class="next action-button" value="Next" />' +
            //'</fieldset>' +
            //'<fieldset class="personal-details">' +
            //    '<h2 class="fs-title">Some personal details</h2>' +
            //    '<input type="text" class="user-address" placeholder="Where do you live?" />' +
            //    '<input type="text" class="user-dob" id="dob" placeholder="Your date of birth" />' +

            //    '<div class="row jumbotron">' +
            //        '<h5 class="col-md-12 text-left">Gender</h5>' +

            //        '<div class="col-md-2"><div class="img-circle padding-10 color-bg-hover" data-id="1" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/male.png" /></div><div style="margin-top: 4px;">Male</div></div>' +
            //        '<div class="col-md-2"><div class="img-circle padding-10 color-bg-hover" data-id="0" onclick="setDescribe(this);" style="background-color: #ccc;"><img class="img-responsive" src="/assets/images/female.png" /></div><div style="margin-top: 4px;">Female</div></div>' +
            //    '</div>' +

            //    '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
            //    '<input type="button" name="submit" class="submit action-button" value="Submit" onclick="updateUserDescription(this)"/>' +
            //    //'<input type="button" name="submit" class="submit action-button" value="Submit" onclick="closeThisModal(this)"/>' +
            //'</fieldset>' +
        '</form>' +
    '</div>';

    return $elem;
}

//$(document).ready(function () {
//    $("body").append(createWizardForm());

//    //jQuery time
//    var current_fs, next_fs, previous_fs; //fieldsets
//    var left, opacity, scale; //fieldset properties which we will animate
//    var animating; //flag to prevent quick multi-click glitches

//    $(".next").click(function () {
//        console.log("before")
//        if (animating) return false;
//        animating = true;
//        console.log("after")
//        current_fs = $(this).parent();
//        next_fs = $(this).parent().next();

//        //activate next step on progressbar using the index of next_fs
//        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//        //show the next fieldset
//        next_fs.show();
//        //hide the current fieldset with style
//        current_fs.animate({ opacity: 0 }, {
//            step: function (now, mx) {
//                //as the opacity of current_fs reduces to 0 - stored in "now"
//                //1. scale current_fs down to 80%
//                scale = 1 - (1 - now) * 0.02;
//                //2. bring next_fs from the right(50%)
//                left = (now * 30) + "%";
//                //3. increase opacity of next_fs to 1 as it moves in
//                opacity = 1 - now;
//                current_fs.css({
//                    'transform': 'scale(' + scale + ')',
//                    'position': 'absolute'
//                });
//                next_fs.css({ 'left': left, 'opacity': opacity });
//            },
//            duration: 500,
//            complete: function () {
//                current_fs.hide();
//                animating = false;
//            },
//            //this comes from the custom easing plugin
//            easing: 'easeInOutBack'
//        });
//    });

//    $(".previous").click(function () {
//        if (animating) return false;
//        animating = true;

//        current_fs = $(this).parent();
//        previous_fs = $(this).parent().prev();

//        //de-activate current step on progressbar
//        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//        //show the previous fieldset
//        previous_fs.show();
//        //hide the current fieldset with style
//        current_fs.animate({ opacity: 0 }, {
//            step: function (now, mx) {
//                //as the opacity of current_fs reduces to 0 - stored in "now"
//                //1. scale previous_fs from 80% to 100%
//                scale = 0.8 + (1 - now) * 0.2;
//                //2. take current_fs to the right(50%) - from 0%
//                left = ((1 - now) * 50) + "%";
//                //3. increase opacity of previous_fs to 1 as it moves in
//                opacity = 1 - now;
//                current_fs.css({ 'left': left });
//                previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
//            },
//            duration: 500,
//            complete: function () {
//                current_fs.hide();
//                animating = false;
//            },
//            //this comes from the custom easing plugin
//            easing: 'easeInOutBack'
//        });
//    });

//    $(".submit").click(function () {
//        return false;
//    });

//    $('#dob').bootstrapMaterialDatePicker({ weekStart: 0, time: false });
//})

function setDescribe(e) {
    var $me = $(e);
    $me.closest("fieldset").find(".color-bg-hover").removeClass("active");
    $me.addClass("active");
}

function updateUserDescription(e) {
    var $me = $(e);
    var $obj = $me.closest("form");
    var Data = {
        "DescribeID": $obj.find(".describe").find(".color-bg-hover.active").data("id"),
        "UserBrief": $obj.find(".user-description").find("textarea").val(),
        "IsExpert": $obj.find(".is-expert").find(".color-bg-hover.active").data("id"),
        "Address": $obj.find(".personal-details").find(".user-address").val(),
        "DOB": $obj.find(".personal-details").find(".user-dob").val(),
        "Gender": $obj.find(".personal-details").find(".color-bg-hover.active").data("id"),
        "Expertise": $obj.find(".user-expertise").find(".expertise").val(),
    };
    runAjax("/Profile/UpdateUserDescriptions", Data, false, $(e), "button", afterUpdateUserDescription, $(e));
}

function afterUpdateUserDescription(data, e) {
    var $me = $(e);
    $me.closest("div").fadeOut("fast", function () {
        $(this).remove();
    });


    //getPosts("0", "0");

}

function closeThisModal(e) {
    var $me = $(e)
    $me.closest("div").fadeOut("fast", function () {
        $(this).remove();
    });
}

function searchOccupation(e) {
    var $me = $(e);




    //if ($me.val().trim() != "") {
    //    infoData = $(occupation).filter(function () {
    //        return (this.search($me.val()) >= 0)
    //    });
    //    var n = infoData.length;
    //    for (var item = 0; item < n ; item++) {
    //        //console.log("item: " + item + " data : " + infoData[item]);
    //        var $elem = '';


    //        $me.after("")
    //        //expertise - tag
    //    }
    //}
}