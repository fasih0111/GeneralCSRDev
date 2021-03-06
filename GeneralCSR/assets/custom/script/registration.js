﻿function createWizardForm() {
    var $elem = '' +
    '<div style="position:fixed; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgba(0,0,0,0.85); z-index: 1030;" >' +
        '<form id="msform" class="col-md-10 col-md-offset-1">' +
            '<ul id="progressbar">' +
                '<li class="active">Expertise</li>' +
                '<li>Profile Description</li>' +
                '<li>Cateogries</li>' +
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
                '<h2 class="fs-title">Broadly speaking, what are your areas of expertise? Or your profession.</h2>' +
    '<h3 class="fs-subtitle">This enables us to show more relevant content to you especially if your expertise is required to address an issue.</h3>' +


    '<h3 class="fs-subtitle">Please choose up to 3.</h3>' +

                '<div class="dropdown">' +
                    '<input type="text" style="margin-bottom: 0px" class="expertise" placeholder="Search here" onclick="searchOccupation(this);" onkeyup="searchOccupation(this);"/>' +
                    '<ul class="dropdown-menu occupations" style="width: 100%">' +
                    '</ul>' +
                '</div>' +
                '<div class="row expertise-tag"></div>' +

                //'<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                '<input type="button" name="next" class="next action-button" value="Next" />' +
            '</fieldset>' +
            '<fieldset class="user-description">' +
                '<h2 class="fs-title">Write a brief sentence about yourself, interests or expertise.</h2>' +
                '<h3 class="fs-subtitle">This will be what others see when viewing your profile.</h3>' +
                '<textarea rows="4" placeholder="Eg. Teach mathematics, Love astronomy, Technology enthusiast, Blogger, Passionate about cooking, Young mother of 2, Living in saddar"></textarea>' +
                '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                '<input type="button" name="next" class="next action-button" value="Next" />' +
            '</fieldset>' +
            '<fieldset class="category">' +
                '<h2 class="fs-title">What categories are you most passionate about?</h2>' +
                //'<h3 class="fs-subtitle">We will never sell it</h3>' +
                '<div class="sf-step" id="category" >' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="1">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I01.jpg">' +
                        '<div class="cat-title"><p>No Poverty</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="2">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I02.jpg">' +
                        '<div class="cat-title"><p>Zero Hunger</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="3">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I03.jpg">' +
                        '<div class="cat-title"><p>Good Health & Well-Being</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="4">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I04.jpg">' +
                        '<div class="cat-title"><p>Quality Education</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="5">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I05.jpg">' +
                        '<div class="cat-title"><p>Gender Equality</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="6">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I06.jpg">' +
                        '<div class="cat-title"><p>Clean Water & Sanitation</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="7">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I07.jpg">' +
                        '<div class="cat-title"><p>Affordable & Clean Energy</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="8">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I08.jpg">' +
                        '<div class="cat-title"><p>Decent Work & Economic Growth</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="9">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I09.jpg">' +
                        '<div class="cat-title"><p>Industry, Innovation & Infrastructure</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="10">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I10.jpg">' +
                        '<div class="cat-title"><p>Reduce Inequilities</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="11">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I11.jpg">' +
                        '<div class="cat-title"><p>Sustainable Cities & Communities</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="12">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I12.jpg">' +
                        '<div class="cat-title"><p>Responsible Consumption & Production</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="13">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I13.jpg">' +
                        '<div class="cat-title"><p>Climate Action</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="14">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I14.jpg">' +
                        '<div class="cat-title"><p>Life Below Water</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="15">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I15.jpg">' +
                        '<div class="cat-title"><p>Life On Land</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="16">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I16.jpg">' +
                        '<div class="cat-title"><p>Peace, Justise & Strong Institution</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                    '<div class="col-md-2 cat-info" onclick="selectCategory(this);" data-id="17">' +
                        '<img class="img-responsive" data-img-id="01" src="/assets/images/Categories/I17.jpg">' +
                        '<div class="cat-title"><p>Partnership For The Goals</p></div>' +
                        '<div class="check-wrapper"><div class="check"></div></div>' +
                    '</div>' +
                '</div>' +
'<input type="button" name="previous" class="previous action-button" value="Previous" />' +
'<input type="button" name="submit" class="submit action-button" value="Submit" onclick="updateUserDescription(this) "/>'
    //'<input type="button" name="next" class="next action-button" value="Next" />' +
    //'<input type="button" name="submit" class="submit action-button" value="Submit" onclick="updateUserDescription(this)"/>' +
    //'<a onclick="todo(this);">Connect with social network</a>' +
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
    $me.closest("div").fadeOut("fast", function () { $(this).remove(); });
    var $bodyElem = '<h5 style="margin-bottom: 30px;">This helps in generating more visibility and participation.</h5>' +
        '<div class="row">' +
            '<div class="col-md-6"><button class="btn btn-default mb-14" style="width: 100%" type="button" onclick="todo(this);"> <span class="sign-up-text google">Connect with Google</span></button></div>' +
            '<div class="col-md-6"><button class="btn btn-default mb-14" style="width: 100%" type="button" onclick="todo(this);"> <span class="sign-up-text facebook">Connect with Facebook</span></button></div>' +
        '</div>';
    var $footerElem = '<button class="btn btn-default" href="javascript:void(0)" onclick="skipSocialConnect(this);">Skip</button>';
    showModal("", "", true, true, false, "Please connect with a social network.", $bodyElem, $footerElem);
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

    $(".tempss").remove();
    if ($me.val().trim() != "") {
        if (!($me.closest(".dropdown").hasClass("open"))) $me.closest(".dropdown").addClass("open");
        $(".occupations li").addClass("hidden");
        $(".occupations li:containsNC('" + $me.val() + "')").removeClass("hidden");

        if ($(".occupations li:not('.hidden')").length == 0) {
            $(".occupations").append("<li class='tempss text-center'><h4>Not found. Please search by putting key words</h4></li>");
        } 
    } else {
        $me.closest(".dropdown").removeClass("open");
        $(".occupations li").addClass("hidden");
    }



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

function selectOccupation(e) {
    var $me = $(e);

    if ($(".expertise-tag .selected-occ").length < 3) {
        var $elem = '' +
            '<div class="selected-occ">' + $me.find("a").text() + '' +
                '<div class="selected-occ-close" onclick="removeOccItem(this)">✖</div>' +
            '</div>';
        $(".expertise-tag").append($elem);
    } else showCustomAlert("Warning", "You cannot select more than 3 expertise", "danger", "bottom-left");

    $(".occupations li").addClass("hidden");
    $(".occupations").closest(".dropdown").removeClass("open");
    $(".expertise").val("");
    $(".expertise").focus();
}

function removeOccItem(e) {
    var $me = $(e);
    $me.closest(".selected-occ").fadeOut("fast", function () {
        $(this).remove();
    });
}

function skipSocialConnect(e) {
    var $me = $(e);

    closeModal($me);

    $(".navbar-main").append('<div class="custom-top-bar-alert alert-success">You can join network from profile later. </div>');
    setTimeout(function () { $(".custom-top-bar-alert").fadeOut("fast", function () { $(this).remove(); }); }, 5000);

}
