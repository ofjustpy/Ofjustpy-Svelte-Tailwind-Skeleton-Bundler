var justpyComponents = [{ "id": "/btn1", "vue_type": "html_component", "show": true, "debug": false, "events": ["click"], "event_modifiers": {}, "transition": null, "html_tag": "button", "text": "Not clicked yet", "classes": "bg-gray-100 text-gray-600 mr-1 mb-1 px-4 py-2 font-bold outline hover:shadow-md uppercase hover:bg-gray-200 hover:outline-4 hover:rounded-md", "attrs":{ "id": "/btn1"     }, "object_props": [] }];

jpComponentBuilder.justpyComponents.set(justpyComponents);

const alpha = new jpComponentBuilder.App({target: document.getElementById("components"),

						});
console.log(alpha);
			      

const beta = new jpComponentBuilder.SkeletonUI({target: document.getElementById("app")});
