var line = '{"menu": {"header": "menu", "items": [{"id": 27}, {"id": 0, "label": "Label 0"}, null, {"id": 93}, {"id": 85}, {"id": 54}, null, {"id": 46, "label": "Label 46"}]}}';

	var json = JSON.parse(line);
    var item = json.menu.items;
    var count = 0;
    for (var x in item) {
    	if (item[x] && item[x].label) {
	    	count += item[x].id;
    	}
    }
    console.log(count);