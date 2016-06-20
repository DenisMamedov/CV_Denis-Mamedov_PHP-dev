$(function () {
    $(".en").click(function () {
        $(".save").attr("title", "Save CV");
        $(".print").attr("title", "Print CV");
        $(".mail-top").attr("title", "Contact Me");
        $("#en").attr("title", "English");
        $("#ru").attr("title", "Russian");
        $("#name").text("Denis Mamedov");
        $("#goal").text("Goal: Start junior PHP developer career with the purpose to grow up to teamlead position.");
        $("#address").text("Kiev");
        $("#base").text("Tehnical Skills");
        $("#term1, #term2, #term3").text("Basic, 6 month");
        $("#skills1").text("I can work with Bootstrap. HTML coding is medium level.");
        $("#skills2").text("I understand the way of object-oriented programming and also I know the principle of MVC coding." +
            " I write medium difficult SQL queries.");
        $("#skills3").text("There is experience with jQuery technology. I can write simple scripts.");
        $("#education").text("Education");
        $("#highschool").text("Higher education, NTUU 'KPI'");
        $("#specialty").text("Specialty: Automation and Computer Integrated Technologies");
        $("#courses").text("Courses, PHP Academy");
        $("#diploma").text("It was developed a site with database to create a tenders and purchases." +
            " The users can set their price offers." +
            " As a result of analysis the user get a notification about winning or losing the purchase.");
        $("#about").text("Additional info");
        $("#get_in_touch").text("Get in touch!");
        $("#online").text("Online contact");
        $("#personal").text("About myself");
        $("#info").text("I wish to get my skills at workplace. Without any pernicious habits. Married.");
        $(".success").text("Your message has been sent successfully");
        $(".error").text("Your message was not sent because a server error has occurred.");
        $("#f_name").text("*First name");
        $("#l_name").text("*Last name");
        $("#tel").text("*Phone");
        $("#msg").text("*Message");
        $("#loading").text("Sending message...");
        $(".i-submit").attr("value","Send message");
    });
});