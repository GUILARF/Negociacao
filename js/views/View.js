System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar) {
                    this._elemento = $(seletor);
                    this._escapar = escapar;
                }
                update(model, escapar) {
                    let template = this.template(model);
                    if (this._escapar)
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    this._elemento.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
