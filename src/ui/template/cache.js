define(['marionette', 'template'], function(Marionette, compiledTemplate){
	Marionette.TemplateCache.prototype.loadTemplate = loadTemplate;
	Marionette.TemplateCache.prototype.compileTemplate = compileTemplate;

	function compileTemplate(rawTemplate){
    return rawTemplate;
  }
  
	function loadTemplate(templateId){
    var template = compiledTemplate[templateId];

    if (!template || template.length === 0){
      throw new Error("Could not find template: '" + templateId + "'", "NoTemplateError");
    }

    return template;
  };
  
  return Marionette.TemplateCache;

});