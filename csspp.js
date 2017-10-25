(function () {
    var stylesheets = document.getElementsByTagName("csspp");

    if (stylesheets && stylesheets.length > 0) {
        for (var i = 0; i < stylesheets.length; i++) {
            var current = stylesheets[i]; // Get current stylesheet
            var src = current.getAttribute("src"); // Get current information
            var style = current.getAttribute("type"); // Get the style of the code

            if (style)
            {
                if (src !== null) {

                    // It's an external stylesheet
                    var stylesheet = "";

                    $.get({
                        url: src,
                        complete: function (response) {
                            stylesheet = response.text;
                        },
                        error: function () {
                            console.error("Could not find file \"" + src + "\"")
                        }
                    });

                } else {
                    // Internal stylesheet
                    var stylesheet = current.innerHTML;
                    current.innerHTML = ""; 

                    // Process the stylesheet
                    if (style == "text/csspp-json")
                    {
                        var json = JSON.parse(stylesheet); // Parse the JSON content
                        var rules = (Object.keys(json));

                        for (var r = 0; r < rules.length; r++)
                        {
                            
                        }
                    }
                }
            }else{
                console.error("\"type\" attribute is required")
            }
        }
    }
})();