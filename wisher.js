(function(global,$){

var wellWisher = function(first, last, lang){
		return new wellWisher.init(first, last, lang);
};

		wellWisher.prototype = {};

		wellWisher.init = function(first, last, lang){

			var self = this;
			self.first = first || '';
			self.last = last || '';
			self.lang = lang || 'english';
		};


})(window,jQuery);