/*
 * to-sentence v1.0.0
 * (c) 2015 Rhys Causey
 * License: MIT
 */

'use strict';

angular.module('toSentence', []).
	directive('toSentence', function() {
		return {
			restrict: 'EA',
			scope: {
				wordsConnector: '=',
				twoWordsConnector: '=',
				lastWordConnector: '=',
				items: '='
			},
			link: function(scope, element, attr) {
				var wordsConnector = scope.wordsConnector || ', ',
					twoWordsConnector = scope.twoWordsConnector || ' and ',
					lastWordConnector = scope.lastWordConnector || ', and ',
					items = scope.items || [],
					elementText;

				var len = items.length;
				if (len == 1) {
					elementText = items[0];
				} else if (len == 2) {
					elementText = items[0] +
						twoWordsConnector +
						items[1];
				} else {
					elementText =
						items.slice(0, -1).join(wordsConnector) +
						lastWordConnector + items[len - 1];
				}

				element.text(elementText || '');
			}
		}
	});
