

var all_templates = []				//   *global*


var project_manager = {}			//   *global*
project_manager.projects = []

project_manager.list_all_projects = function () {
    $("#main0").css("display", "block")
    // $("#main0").css("position", "relative")
    // $("#main0").css("z-index", 10)
    for (var i = 0; i < this.projects.length; i++) {
        $("#main0").append(this.projects[i].name + "<br>")
    }
}

project_manager.runfirst = function () {
    this.projects[0].run()
}

var p1 = new project_class("first Project!")
project_manager.projects.push(p1)

// --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- ---------

function project_class (name, html_id) {
    this.name = name
    this.now_main_html_id = html_id || "#main1"           // *HTML-HOOK*
    this.files = {}
}

project_class.prototype.run = function (hello) {

    var hello = hello || "<h2>" + this.name + "</h2> <br>"
    $(this.now_main_html_id).append(hello)
    this.new_clipboard()
    this.new_clipboard("clip2", "index.html")
    this.new_clipboard("body1", "index.html")
    this.new_clipboard("main", "my.css")
    // $(this.now_main_html_id).append(JSON.stringify(this.files))


    for (var i = 0; i < all_templates.length ; i++) {

        $(this.now_main_html_id).append(all_templates[i].list_template_head(i))


    }

}

project_class.prototype.new_clipboard = function (name, file) {

    if (! name) name = "clip1"
    if (! file) file = "index.html"

    if (typeof this.files[file] !== "undefined") {
        this.files[file].clipboards.push(new clipboard_class(name))
    }
    else {
        this.files[file] = {}
        this.files[file].clipboards = []
        this.files[file].clipboards.push(new clipboard_class(name))
    }

}

// --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- ---------


function clipboard_class (name) {
    this.name = name
}

function document_class (name) {

    this.name = name
    this.areas = []

}

document_class.prototype.add_area = function (area) {

    this.areas.push(area)

}

function document_area_class (before, content, after) {

    this.before = before
    this.content = content
    this.after = after

}

document_area_class.prototype.join = function (x) {

    return this.before + x + this.content + x + this.after

}

function connection_class (ins, outs) {

    this.ins = ins
    this.outs = outs

    /*
    Eine Connection vermittelt ggf. zwischen einem Project Field und dem Template Field eines "veräußerten"
    Template Objects.
    */
}



// "field deskriptor"

function field_deskriptor_class (name, connectivity ) {
    this.name = name
    this.connectivity = connectivity
}
field_deskriptor_class.prototype.apply_template = function() {
    l("hi apply_template()")
}
field_deskriptor_class.prototype.getvalue = function(field) {
    l("hi getvalue()")
}
field_deskriptor_class.prototype.show = function(field) {
    l("hi getvalue()")
}


// "field typer"

function field_typer_class() {    // type declarations, that are divided by: "formal_type", "content_type", "content_use_case"
                                                            // and even: "grammar_type",

    for (var i = 0; i < arguments.length; i++){

        switch (arguments[i]) {

            case 'number' :                         // formal
                l("case: " + arguments[i])
                this.formal_type = arguments[i]
                break

            case 'number-positive' :
                l("case: " + arguments[i])
                this.content_type = arguments[i]
                break

            case 'number-negative' :
                l("case: " + arguments[i])
                this.content_type = arguments[i]
                break

            case 'number-positive-negative' :
                l("case: " + arguments[i])
                this.content_type = arguments[i]
                break

            case 'number-as-main-criteria' :
                l("case: " + arguments[i])
                this.content_use_case = arguments[i]
                break

            case 'number-as-single-criteria' :
                l("case: " + arguments[i])
                this.content_use_case = arguments[i]
                break

            case 'number-as-weak-criteria' :
                l("case: " + arguments[i])
                this.content_use_case = arguments[i]
                break

            case 'number-as-one-of-many' :
                l("case: " + arguments[i])
                this.content_use_case = arguments[i]
                break

            case 'text' :
                l("case: " + arguments[i])
                break

            case 'text-short' :
                l("case: " + arguments[i])
                break

            case 'text-long' :
                l("case: " + arguments[i])
                break

            case 'text-as-title' :          // name… label… title…
                l("case: " + arguments[i])
                break

            case 'bool' :
                l("case: " + arguments[i])
                break

            case 'booltext' :
                l("case: " + arguments[i])
                break

            case 'complex' :
                l("case: " + arguments[i])
                break

            case 'html-head' :
                l("case: " + arguments[i])
                break

            case 'html-body' :
                l("case: " + arguments[i])
                break

            case 'html-tag' :
                l("case: " + arguments[i])
                break

            case 'html-attribute' :
                l("case: " + arguments[i])
                break

            case 'xml-tag' :
                l("case: " + arguments[i])
                break

            case 'xml-attribute' :
                l("case: " + arguments[i])
                break

            case 'json' :
                l("case: " + arguments[i])
                break

            case 'code' :
                l("case: " + arguments[i])
                break

            case 'code-javascript' :
                l("case: " + arguments[i])
                break

            case 'human-symbol' :
                l("case: " + arguments[i])
                break

            case 'machine-symbol' :
                l("case: " + arguments[i])
                break

            case 'html-string' :
            case 'html' :
                l("case: " + arguments[i])
                break

            case 'direct-display' :
                l("case: " + arguments[i])
                break

            case 'filtered-display' :
                l("case: " + arguments[i])
                break

            case 'controller-parameter' :
                l("case: " + arguments[i])
                break

            case '' :
                l("case: " + arguments[i])
                break

            default :
                l("*default*: " + arguments[i])

        }//switch

    }//for

}//function


// *global* //
system_templates = Object.create(null)



        function template_class(source_id, name, tags, fields) {   //  template types ??  ... solved by "tags" ?

           // l("hi template_class")
            this.source = document.getElementById(source_id).innerHTML          // String !
            this.template = Handlebars.compile(this.source)                     // Function !  , depends on String
            this.name = name
            this.tags = tags
            this.fields = fields
			this.weblinks = []
            this.ex1 = { template_name: this.name }

        }


        template_class.prototype.sourcedisplay = function(){
			return system_templates["sourcedisplay"]({ template : this.source})
        }


        template_class.prototype.list_template = function(index){
			var o = {   index : index ,  name : this.name ,  tags : this.tags.join(", ") , template : this.source        }
			return system_templates["list_template"](o)
        }

		template_class.prototype.list_template_head = function(index){
			var o = {   index : index ,  name : this.name ,  tags : this.tags.join(", ") , links : this.weblinks ,
                example1 : JSON.stringify(this.ex1),
                code1 : this.source ,
                code1_output : this.template(this.ex1)
            }
			return system_templates["list_template_head"](o)
        }

        template_class.prototype.addURL = function(url){
			this.weblinks.push(url)
        }

        /*
        template_class.prototype.sourcedisplay_highlighted = function(){
                var a = "<div class='raw_template'>"
                var b = "</div>"
                return  a + zerotemplate_0({ zero : this.template()}) + b

        }
*/
