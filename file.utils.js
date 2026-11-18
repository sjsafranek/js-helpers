
const FileUtils = {

    exportFile: function(content, fileName, fileType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: fileType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    },

    exportJSON: function(data, fileName) {
    	var content = JSON.stringify(data)
    	FileUtils.exportFile(content, fileName, 'application/json');
    }
	
	enableFileDrop: function($elem, callback) {
		$elem.get(0).ondrop = function(e) {
			e.preventDefault();
			$(this).css('outline', 'none');
			var file = e.dataTransfer.files[0];
			callback && callback(file);
		}
		$elem.get(0).ondragover = $elem.get(0).ondragenter = function(e) {
			e.preventDefault();
			$(this).css('outline', '2px dashed #92b0b3');
		};
		$elem.get(0).ondragstart = function(e) {
			e.preventDefault();
			$(this).css('outline', '2px dashed #92b0b3');
		};
		$elem.get(0).ondragend = $elem.get(0).ondragleave = function(e) {
			e.preventDefault();
			$(this).css('outline', 'none');
		};
	}

};
