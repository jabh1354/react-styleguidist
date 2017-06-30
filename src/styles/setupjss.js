import jss from 'jss';
import global from 'jss-global';
import isolate from 'jss-isolate';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import compose from 'jss-compose';

// XXX: Waiting for release:
// https://github.com/cssinjs/jss-isolate/commit/c09c9355dfa02374971b8d929d13e651ac301990
// https://github.com/cssinjs/jss-isolate/pull/9
import isolate from './jss-isolate';
import nonInherited from './jss-isolate/noninherited';
import nonInheritedProps from './nonInheritedProps';

jss.setup({
	plugins: [
		global(),
		isolate({
			reset: {
				// Reset all inherited and non-inherited properties
				...nonInheritedProps,

				// “Global” styles for all components
				boxSizing: 'border-box',

				// Allow inheritance because it may be set on body and should be available for user components
				fontFamily: 'inherit',
			},
		}),
		nested(),
		camelCase(),
		defaultUnit(),
		compose(),
	],
});
