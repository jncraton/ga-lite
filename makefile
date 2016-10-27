all:
	curl -s -d compilation_level=SIMPLE_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code --data-urlencode "js_code@ga-micro.js" http://closure-compiler.appspot.com/compile > ga-micro.min.js
	wc -c ga-micro.min.js