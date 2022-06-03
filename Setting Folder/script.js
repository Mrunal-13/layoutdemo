$(document).ready(function() {
    $("#profile-link").addClass("active-li");
    $("#active-manage").addClass("active");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvAddBranch").css("display", "none");

    $("#about-link").click(function() {
        clickAbout();
    });
    $("#branding-link").click(function() {
        clickBranding();
    });
    $("#profile-link").click(function() {
        clickPracticeProfile();
    });
    $("#details-link").click(function() {
        clickPracticeDetails();
    });
    $("#practice-staff").click(function() {
        manageStaffTable();
    });
    $("#active-manage").click(function() {
        manageStaffTable();
    });
    $("#active-noti").click(function() {
        staffNotiTable();
    });
    $("#active-doctor").click(function() {
        doctorVisitTable();
    });
    $("#btn-other-staff").click(function() {
        clickOtherStaff();
    });
    $("#btn-doctor").click(function() {
        clickDoctor();
    });
    $("#btn-other-staff").click(function() {
        clickOtherStaff();
    });
    $("#btn-other-doctor").click(function() {
        clickDoctor();
    });
    $("#btn-add-doctor").click(function() {
        clickAddDoctor();
    });
    $("#btn-add-staff").click(function() {
        clickAddStaff();
    });
    $("#btnTimeEdit").click(function() {
        doctorOfficeAppoin();
    });
    $("#calendar-link").click(function() {
        clickCalendar();
    });
    $("#active-general").click(function() {
        clickGeneral();
    });
    $("#active-practice-time").click(function() {
        clickPracticeTime();
    });
    $("#active-appoin-category").click(function() {
        clickAppoinCate();
    });
    $("#active-notification").click(function() {
        clickNotification();
    });
    $("#active-subscription").click(function() {
        clickSubscription();
    });
    $("#active-trash-bin").click(function() {
        clickTrashBin();
    });
    $("#communication-link").click(function() {
        clickCommunication();
    });
    $("#active-appoin-follow").click(function() {
        clickAppoinFollow();
    });
    $("#active-comm-detail").click(function() {
        clickCommDetail();
    });
    $(".branchCard").click(function() {
        clickAddBranch();
    });

    // Doctor's Practice Timings- Office Appointments
    $("#showTable-2").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $(this).parents(".inner_wrap").find("#tableHead").show();
            $(this).parents(".inner_wrap").find("#table-2").show();
            $(".dvtiming").css("height", "830px");
            $(".dvtiming").css("width", "660px");
            $(".inner_wrap ul li").css("background-color", "#ffffff");
        } else {
            $(this).parents(".inner_wrap").find("#tableHead").hide();
            $(this).parents(".inner_wrap").find("#table-2").hide();
            $(".dvtiming").css("height", "435px");
            $(".inner_wrap ul li").css("background-color", "#bfeff5");
        }
    });

    $("#addBreak-1").click(function() {
        $("#trLunch-1").show();
        $("#addBreak-1").hide();
    });
    $("#addBreak-M").click(function() {
        $("#trLunch-M").show();
        $("#addBreak-M").hide();
        $(".dvtiming").css("height", "910px");
    });
    $("#addBreak-Tue").click(function() {
        $("#trLunch-Tue").show();
        $("#addBreak-Tue").hide();
        $(".dvtiming").css("height", "970px");
    });
    $("#addBreak-Wed").click(function() {
        $("#trLunch-Wed").show();
        $("#addBreak-Wed").hide();
        $(".dvtiming").css("height", "1010px");
    });
    $("#addBreak-Thus").click(function() {
        $("#trLunch-Thus").show();
        $("#addBreak-Thus").hide();
        $(".dvtiming").css("height", "1140px");
    });
    $("#addBreak-F").click(function() {
        $("#trLunch-F").show();
        $("#addBreak-F").hide();
        $(".dvtiming").css("height", "1180px");
    });
    $("#addBreak-Sat").click(function() {
        $("#trLunch-Sat").show();
        $("#addBreak-Sat").hide();
        $(".dvtiming").css("height", "1220px");
    });
    $("#addBreak-Sun").click(function() {
        $("#trLunch-Sun").show();
        $("#addBreak-Sun").hide();
        $(".dvtiming").css("height", "1270px");
    });
    $("#check-M").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#monday").css("background-color", "#bfeff5");

        } else {
            $("#monday").css("background-color", "#ffffff");
        }
    });
    $("#check-Tue").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#tuesday").css("background-color", "#bfeff5");

        } else {
            $("#tuesday").css("background-color", "#ffffff");
        }
    });

    $("#check-Wed").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#wednesday").css("background-color", "#bfeff5");

        } else {
            $("#wednesday").css("background-color", "#ffffff");
        }
    });
    $("#check-Thus").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#thuesday").css("background-color", "#bfeff5");

        } else {
            $("#thuesday").css("background-color", "#ffffff");
        }

    });
    $("#check-F").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#friday").css("background-color", "#bfeff5");

        } else {
            $("#friday").css("background-color", "#ffffff");
        }
        $("#friday").css("background-color", "#bfeff5");

    });
    $("#check-Sat").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#saturday").css("background-color", "#bfeff5");

        } else {
            $("#saturday").css("background-color", "#ffffff");
        }

    });
    $("#check-Sun").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#sunday").css("background-color", "#bfeff5");

        } else {
            $("#sunday").css("background-color", "#ffffff");
        }

    });

    // Time Difference
    function calculateTime() {
        var valuestart = $("#timeOne").val();
        var valuestartM = $("#timeOne-M").val();
        var valuestartTue = $("#timeOne-Tue").val();
        var valuestartWed = $("#timeOne-Wed").val();
        var valuestartThus = $("#timeOne-Thus").val();
        var valuestartF = $("#timeOne-F").val();
        var valuestartSat = $("#timeOne-Sat").val();
        var valuestartSun = $("#timeOne-Sun").val();

        var valuestop = $("#timeTwo").val();
        var valuestopM = $("#timeTwo-M").val();
        var valuestopTue = $("#timeTwo-Tue").val();
        var valuestopWed = $("#timeTwo-Wed").val();
        var valuestopThus = $("#timeTwo-Thus").val();
        var valuestopF = $("#timeTwo-F").val();
        var valuestopSat = $("#timeTwo-Sat").val();
        var valuestopSun = $("#timeTwo-Sun").val();

        var timeStartH = parseInt(new Date("01/01/2022 " + valuestart).getHours());
        var timeStartMH = parseInt(new Date("01/01/2022 " + valuestartM).getHours());
        var timeStartTueH = parseInt(new Date("01/01/2022 " + valuestartTue).getHours());
        var timeStartWedH = parseInt(new Date("01/01/2022 " + valuestartWed).getHours());
        var timeStartThusH = parseInt(new Date("01/01/2022 " + valuestartThus).getHours());
        var timeStartFH = parseInt(new Date("01/01/2022 " + valuestartF).getHours());
        var timeStartSatH = parseInt(new Date("01/01/2022 " + valuestartSat).getHours());
        var timeStartSunH = parseInt(new Date("01/01/2022 " + valuestartSun).getHours());

        var timeEndH = parseInt(new Date("01/01/2022 " + valuestop).getHours());
        var timeEndMH = parseInt(new Date("01/01/2022 " + valuestopM).getHours());
        var timeEndTueH = parseInt(new Date("01/01/2022 " + valuestopTue).getHours());
        var timeEndWedH = parseInt(new Date("01/01/2022 " + valuestopWed).getHours());
        var timeEndThusH = parseInt(new Date("01/01/2022 " + valuestopThus).getHours());
        var timeEndFH = parseInt(new Date("01/01/2022 " + valuestopF).getHours());
        var timeEndSatH = parseInt(new Date("01/01/2022 " + valuestopSat).getHours());
        var timeEndSunH = parseInt(new Date("01/01/2022 " + valuestopSun).getHours());

        var timeStartM = parseInt(new Date("01/01/2022 " + valuestart).getMinutes());
        var timeStartMM = parseInt(new Date("01/01/2022 " + valuestartM).getMinutes());
        var timeStartTueM = parseInt(new Date("01/01/2022 " + valuestartTue).getMinutes());
        var timeStartWedM = parseInt(new Date("01/01/2022 " + valuestartWed).getMinutes());
        var timeStartThusM = parseInt(new Date("01/01/2022 " + valuestartThus).getMinutes());
        var timeStartFM = parseInt(new Date("01/01/2022 " + valuestartF).getMinutes());
        var timeStartSatM = parseInt(new Date("01/01/2022 " + valuestartSat).getMinutes());
        var timeStartSunM = parseInt(new Date("01/01/2022 " + valuestartSun).getMinutes());

        var timeEndM = parseInt(new Date("01/01/2022 " + valuestop).getMinutes());
        var timeEndMM = parseInt(new Date("01/01/2022 " + valuestopM).getMinutes());
        var timeEndTueM = parseInt(new Date("01/01/2022 " + valuestopTue).getMinutes());
        var timeEndWedM = parseInt(new Date("01/01/2022 " + valuestopWed).getMinutes());
        var timeEndThusM = parseInt(new Date("01/01/2022 " + valuestopThus).getMinutes());
        var timeEndFM = parseInt(new Date("01/01/2022 " + valuestopF).getMinutes());
        var timeEndSatM = parseInt(new Date("01/01/2022 " + valuestopSat).getMinutes());
        var timeEndSunM = parseInt(new Date("01/01/2022 " + valuestopSun).getMinutes());

        var diffH = timeEndH * 60 - timeStartH * 60;
        var diffMH = timeEndMH * 60 - timeStartMH * 60;
        var diffTueH = timeEndTueH * 60 - timeStartTueH * 60;
        var diffWedH = timeEndWedH * 60 - timeStartWedH * 60;
        var diffThusH = timeEndThusH * 60 - timeStartThusH * 60;
        var diffFH = timeEndFH * 60 - timeStartFH * 60;
        var diffSatH = timeEndSatH * 60 - timeStartSatH * 60;
        var diffSunH = timeEndSunH * 60 - timeStartSunH * 60;

        var diffM = timeEndM - timeStartM;
        var diffMM = timeEndMM - timeStartMM;
        var diffTueM = timeEndTueM - timeStartTueM;
        var diffWedM = timeEndWedM - timeStartWedM;
        var diffThusM = timeEndThusM - timeStartThusM;
        var diffFM = timeEndFM - timeStartFM;
        var diffSatM = timeEndSatM - timeStartSatM;
        var diffSunM = timeEndSunM - timeStartSunM;

        $("#time-difference").html((diffH + diffM) + " Minutes");
        $("#time-difference-M").html((diffMH + diffMM) + " Minutes");
        $("#time-difference-Tue").html((diffTueH + diffTueM) + " Minutes");
        $("#time-difference-Wed").html((diffWedH + diffWedM) + " Minutes");
        $("#time-difference-Thus").html((diffThusH + diffThusM) + " Minutes");
        $("#time-difference-F").html((diffFH + diffFM) + " Minutes");
        $("#time-difference-Sat").html((diffSatH + diffSatM) + " Minutes");
        $("#time-difference-Sun").html((diffSunH + diffSunM) + " Minutes");
    };
    $(".show-lunch-time").change(calculateTime);
    calculateTime();
});

function clickBranding() {
    $(".dvAbout").css("display", "none");
    $("#container").css("display", "flex");
    $("#form-1").css("display", "block");
    $("#footer").css("display", "block");

    $("#branding-link").css("color", "#007bff");
    $("#branding-link").css("border-bottom", "5px solid #007bff");
    $("#branding-link").css("border-radius", "3px");

    $("#about-link").css("color", "#686868");
    $("#about-link").css("border-bottom", "none");
    $("#about-link").css("border-radius", "0px");
}

function clickAbout() {
    $(".dvAbout").css("display", "block");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");

    $("#about-link").css("color", "#007bff");
    $("#about-link").css("border-bottom", "5px solid #007bff");
    $("#about-link").css("border-radius", "3px");

    $("#branding-link").css("color", "#686868");
    $("#branding-link").css("border-bottom", "none");
    $("#branding-link").css("border-radius", "0px");
}

function changeFontStyle(e) {
    const text = document.querySelector(".textarea");
    if (e.target.id === "bold") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("bold");
    }
    if (e.target.id === "italic") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("italic");
    }
    if (e.target.id === "underline") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("underline");
    }
}

const btnAction = document.querySelector(".btn-action");
btnAction.addEventListener('click', changeFontStyle);

function clickPracticeProfile() {
    $("#details-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#profile-link").addClass("active-li");
    $("#communication-link").removeClass("active-li");

    $("#container").css("display", "flex");
    $("#form-1").css("display", "block");
    $("#footer").css("display", "block");
    $(".head-link").css("display", "block");
    $(".dvAbout").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvAddBranch").css("display", "none");
}

function clickPracticeDetails() {
    $("#details-link").addClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#communication-link").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "block");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvAddBranch").css("display", "none");
    $(".dvAddBranch").css("display", "none");

}

function manageStaffTable() {
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").addClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#communication-link").removeClass("active-li");

    $("#active-manage").addClass("active");
    $("#active-noti").removeClass("active");
    $("#active-doctor").removeClass("active");

    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".head-link").css("display", "none");
    $(".dvAbout").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "block");
    $(".table-manage-staff").css("display", "block");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvAddBranch").css("display", "none");
}

function staffNotiTable() {
    $("#active-noti").addClass("active");
    $("#active-manage").removeClass("active");
    $("#active-doctor").removeClass("active");

    $(".table-manage-staff").css("display", "none");
    $(".table-doctor-visit").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "block");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");

}

function doctorVisitTable() {
    $("#active-doctor").addClass("active");
    $("#active-manage").removeClass("active");
    $("#active-noti").removeClass("active");

    $(".table-manage-staff").css("display", "none");
    $(".table-manage-noti").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "block");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");

}

function clickOtherStaff() {
    $(".table-other-staff th").css("padding", "1.5rem 2.8rem");
    $(".table-other-staff td").css("padding", "1.5rem 2.8rem");
    $(".table-other-staff td span").css("left", "46px");

    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "block");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "block");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
}

function clickDoctor() {
    $(".dvButttons").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "block");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
}

function doctorOfficeAppoin() {
    $(".dvDVT-office-appoin").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "block");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
}

function clickAddDoctor() {
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvAddDoctorButton").css("display", "block");
    $(".dvCalendar").css("display", "none");
    $(".dvCommunication").css("display", "none");
}

function clickAddStaff() {
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "block");
    $(".dvCommunication").css("display", "none");
    $(".dvCalendar").css("display", "none");
}

// Calendar
function clickCalendar() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "block");
    $(".dvWeek").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvCommunication").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvAddBranch").css("display", "none");

}

function clickGeneral() {
    $("#active-general").addClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-notification").removeClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvRegion_Time").css("display", "block");
    $(".dvWeek").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");

}

// Set Practice Timings

function clickPracticeTime() {
    $("#calendar-link").removeClass("active-li");
    $("#details-link").addClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");

    $("#active-practice-time").addClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-notification").removeClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "block");
    $(".dvRegion_Time").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
}

function clickAppoinCate() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");

    $("#active-appoin-category").addClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-notification").removeClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "none");
    $(".dvRegion_Time").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvAdd_new_cate").css("display", "block");
}

function clickNotification() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");

    $("#active-notification").addClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "none");
    $(".dvRegion_Time").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dvName").css("display", "block");
}

function clickSubscription() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");

    $("#active-subscription").addClass("active");
    $("#active-notification").removeClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");
    $("#active-trash-bin").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "none");
    $(".dvRegion_Time").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dvTrash_Bin").css("display", "none");
    $(".dv_Subscription").css("display", "block");
}

function clickTrashBin() {
    $("#calendar-link").addClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#communication-link").removeClass("active-li");

    $("#active-trash-bin").addClass("active");
    $("#active-subscription").removeClass("active");
    $("#active-notification").removeClass("active");
    $("#active-appoin-category").removeClass("active");
    $("#active-practice-time").removeClass("active");
    $("#active-general").removeClass("active");
    $("#active-practime-time").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvWeek").css("display", "none");
    $(".dvRegion_Time").css("display", "none");
    $(".dvAdd_new_cate").css("display", "none");
    $(".dvName").css("display", "none");
    $(".dv_Subscription").css("display", "none");
    $(".dvTrash_Bin").css("display", "block");

}

// Communication
function clickCommunication() {
    $("#communication-link").addClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvCommunication").css("display", "block");
    $(".dvAddBranch").css("display", "none");

}

function clickCommDetail() {
    $("#active-comm-detail").addClass("active");
    $("#active-appoin-follow").removeClass("active");
    $("#active-wish-sms").removeClass("active");
    $("#active-email").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvAppoin_Detail").css("display", "none");
    $(".dvComm_Detail").css("display", "block");
}

function clickAppoinFollow() {
    $("#active-appoin-follow").addClass("active");
    $("#active-comm-detail").removeClass("active");
    $("#active-wish-sms").removeClass("active");
    $("#active-email").removeClass("active");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddDoctorButton").css("display", "none");
    $(".dvAddStaffButton").css("display", "none");
    $(".dvCalendar").css("display", "none");
    $(".dvComm_Detail").css("display", "none");
    $(".dvAppoin_Detail").css("display", "block");
}

// Add Branch
function clickAddBranch() {
    $("#profile-link").addClass("active-li");
    $("#communication-link").removeClass("active-li");
    $("#calendar-link").removeClass("active-li");
    $("#details-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");

    $("#active-practice-profile").addClass("active");
    $("#active-branches").removeClass("active");
    $("#active-media").removeClass("active");
    $("#active-service-avalilable").removeClass("active");
    $("#active-stories").removeClass("active");
    $("#active-patient-relation").removeClass("active");
    $("#active-practice-achievment").removeClass("active");

    $(".dvPracticeDetails").css("display", "none");
    $(".dvAddBranch").css("display", "block");
}

// Map
var position = [19.1922, 72.9864];

function initialize() {
    var latlng = new google.maps.LatLng(position[0], position[1]);
    var options = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), options);

    marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Latitude:" + position[0] +
            " | Longitude:" + position[1]
    });

    google.maps.event.addListener(map, "click", function(event) {
        var result = [event.latLng.lat(), event.latLng.lng()];
        transition(result);
    });
};

google.maps.event.addDomListener(window, "load", initialize);

var numDeltas = 100;
var delay = 5;
var i = 0;
var deltaLat;
var deltaLng;

function transition(result) {
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    moveMarker();
};

function moveMarker() {
    position[0] += deltaLat;
    position[1] += deltaLng;
    var latlng = new google.maps.LatLng(position[0], position[1]);
    marker.setTitle("Latitude:" + position[0] +
        " | Longitude:" + position[1]);
    marker.setPosition(latlng);
    if (i != numDeltas) {
        i++;
        setTimeout(moveMarker, delay);
    }
};

// Alert Dropdown

let alertsDropdown = document.getElementById("alertsDropdown");
let alertDetails = document.getElementById("alertDetails");
alertDetails.style.display = "none";
alertsDropdown.addEventListener("click", () => {
    if (alertDetails.style.display == "none") {
        alertDetails.style.display = "";
        messageAlertDetails.style.display = "none";

    } else {
        alertDetails.style.display = "none";
    }
});

let messagesDropdown = document.getElementById("messagesDropdown");
let messageAlertDetails = document.getElementById("messageAlertDetails");
messageAlertDetails.style.display = "none";

messagesDropdown.addEventListener("click", () => {
    if (messageAlertDetails.style.display == "none") {
        messageAlertDetails.style.display = "";
        alertDetails.style.display = "none";

    } else {
        messageAlertDetails.style.display = "none";
    }
});

let adminSettingBox = document.getElementById("adminSettingBox");
adminSettingBox.style.display = "none";
let dropbtnMyfunction = document.getElementById("dropbtnMyfunction");
dropbtnMyfunction.addEventListener("click", () => {
    if (adminSettingBox.style.display === "none") {
        adminSettingBox.style.display = "";
    } else {
        adminSettingBox.style.display = "none";
    }
})

// collapse button function to toggle sidenav barr
function openNav() {
    if (document.getElementById("mySidenav").style.width === "63px" || document.getElementById("mySidenav").style.width === "") {
        document.getElementById("mySidenav").style.width = "250px";
    } else {
        if (window.screen.width <= 767) {
            document.getElementById("mySidenav").style.width = "";
        } else {
            document.getElementById("mySidenav").style.width = "63px";
        }
    }
    if (document.getElementById("leftright").style.width === "95.5%" || document.getElementById("leftright").style.width === "") {
        document.getElementById("leftright").style.width = "83.5%"
    } else {
        document.getElementById("leftright").style.width = "95.5%";
    }
    if (document.getElementById("navbar-fourth").style.width === "96%" || document.getElementById("navbar-fourth").style.width === "") {
        document.getElementById("navbar-fourth").style.width = "83.5%";
        console.log("83")
    } else if (document.getElementById("navbar-fourth").style.width === "78%") {
        document.getElementById("navbar-fourth").style.width = "65%";
        console.log("65")
    } else if (document.getElementById("navbar-fourth").style.width === "65%") {
        document.getElementById("navbar-fourth").style.width = "78%";
        console.log("78")
    } else {
        document.getElementById("navbar-fourth").style.width = "96%";
    }
    // if (document.getElementById("commeddiv").style.marginLeft === "1170px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "980px"
    // }
    // else if (document.getElementById("commeddiv").style.marginLeft === "900px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "700px"
    // }
    // else if(document.getElementById("commeddiv").style.marginLeft === "980px"){
    //   document.getElementById("commeddiv").style.marginLeft = "1170px";
    // }
    // else if (document.getElementById("commeddiv").style.marginLeft === "700px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "900px";
    //   console.log("900")
    // }
    if (document.getElementById("Appointment").style.marginLeft === "480px" || document.getElementById("Appointment").style.marginLeft === "") {
        document.getElementById("Appointment").style.marginLeft = "300px";
    } else if (document.getElementById("Appointment").style.marginLeft === "300px") {
        document.getElementById("Appointment").style.marginLeft = "480px"
    } else if (document.getElementById("Appointment").style.marginLeft === "180px") {
        document.getElementById("Appointment").style.marginLeft = "10px"
    } else if (document.getElementById("Appointment").style.marginLeft === "10px") {
        document.getElementById("Appointment").style.marginLeft = "180px"
    }
}


// Advanced Patient Search
const optionMap = new Map();
optionMap.set("patient_name", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_contact_number", '<select><option value="has_contact_number">Yes</option><option value="no">No</option></select>');
optionMap.set("contact_number", '<input type="text" placeholder="Contains 0123456789"/>');
optionMap.set("age_is", '<input type="number" value="39"/>');
optionMap.set("age_more_than", '<input type="number" value="39"/>');
optionMap.set("age_less_than", '<input type="number" value="39"/>');
optionMap.set("has_date_of_birth", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("date_of_birth", '<input type="date"/>');
optionMap.set("date_of_birth_more_than", '<input type="date"/>');
optionMap.set("date_of_birth_less_than", '<input type="date"/>');
optionMap.set("birthday_is_in", '<input type="date"/>');
optionMap.set("has_patient_id", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("patient_id", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_aadhaar_id", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("aadhaar_id", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_email", '<select><option value="yes">Yes</option><option value="no">No</option>');
optionMap.set("email", '<input type="email" placeholder="Contains xyz@gmail.com"/>');
optionMap.set("has_gender", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("gender", '<select><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select>');
optionMap.set("has_pincode", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("pincode", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_street_address", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("street_address", '<input type="text" placeholder="Contains"/>');
optionMap.set("has_blood_group", '<select><option value="yes">Yes</option><option value="no">No</option></select>')
optionMap.set("blood_group", '<select><option value="aP">A+</option><option value="aN">A-</option><option value="bP">B+</option><option value="bN">B-</option><option value="oP">O+</option><option value="oN">O-</option><option value="abP">AB+</option><option value="abN">AB-</option></select>');
optionMap.set("was_referred_by_someone", '<select><option value="yes">Yes</option><option value="no">No</option></select>');
optionMap.set("referred_by_someone", '<select><option value="another_patient">Another Patient</option><option value="google">Google</option><option value="just_dial">Just Dial</option><option value="welldone_health_care">welldonehealthcare.in</option></select>');


const categoryList = ["Patient Name", "Has Contact Number", "Contact Number", "Age is", "Age is More Than", "Age is Less Than", "Has Date of Birth", "Date of Birth is", "Date of Birth is More Than", "Date of Birth is Less Than", "Birthday is in", "Has Patient ID", "Patient ID", "Has Aadhaar ID", "Aadhaar ID", "Has Email", "Email", "Has Gender", "Gender is", "Has Pincode", "Pincode", "Has Street Address", "Street Address", "Has Blood Group", "Blood Group", "Was Referred By Someone", "Referred By"];

let isCategoriesShown = false;

function GetControl(selectedCategory) {
    const getControl = optionMap.get(selectedCategory);
    if (getControl === undefined) {
        $("#divControl").html("No Corrosponding Control Found.");
    } else {
        $("#divControl").html(getControl + '<i class="fa fa-times-circle" style="display:none;" id="errorShow"></i>');
    }
}

function ShowNoDataMessage() {
    $("#divNoData").show();
    $("#errorShow").show();
}

function HandleCancel() {
    $("#divNoData").hide();
    $("#errorShow").hide();
}

$(document).ready(function() {
    const firstCategory = $("#ddlInfo option:first").val();
    GetControl(firstCategory);

    $("#ddlInfo").change(function(event) {
        const selectedCategory = $(this).val();
        GetControl(selectedCategory);
    });

    $("#btnAddMore").click(function() {
        if (isCategoriesShown === false) {
            categoryList.map((category) => {
                $("#divCategories").append('<input name="category" type="radio" id="' + category + '" value="' + category + '"><label for="' + category + '">' + category + '</label><br />');
            });
            isCategoriesShown = true;
        }
    });

    $('#divCategories').on('change', "input[name=category]", function(event) {
        $("#ddlInfo option:contains(" + event.target.value.trim() + ")").prop('selected', 'selected');
        $('#ddlInfo').trigger('change');
        $("#divCategories").html("");
        isCategoriesShown = false;
    });
});