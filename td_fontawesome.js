var justpyComponents = [{ "id": "/btn1", "vue_type": "font_awesome_component", "show": true, "debug": false, "events": ["click"], "event_modifiers": {}, "transition": null, "html_tag": "faCandyCane", "text": "Not clicked yet", "classes": "", "style": "", "icon_label": "faCoffee", "attrs":{ "id": "/btn1", "flip":"both",  "size":"6x", "rotation":"{90}"  }, "object_props": [] }];

jpComponentBuilder.justpyComponents.set(justpyComponents);

const alpha = new jpComponentBuilder.App({target: document.getElementById("components"),

						});
console.log(alpha);
