$(document).ready(function () {
    setTimeout(function () {
        jQuery.grep($("a"), function (a,i) {
            return (a.href.search("#") >= 0);
        }).forEach(function (el) {
            console.log("adding", el);
            var excerpt = $(el).parents("div").first();
            console.log(excerpt);

            $(el).click(function (event) {
                console.log(event);

                var input = excerpt.siblings("input");
                console.log(input);
                var checked = input.is(":checked");
                console.log(checked);
                if (! checked) {
                    input[0].checked = true;
                };
            });
        });
    }, 1);
});

// $(":checkbox").click(function () {
//     scroll(event.pageX,event.pageY);
// })
