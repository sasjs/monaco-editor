/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { languages } from '../../fillers/monaco-editor-core';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '*',
		blockComment: ['/*', '*/']
	},
	brackets: [
		['[', ']'],
		['(', ')'],
		['{', '}']
	],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"', notIn: ['string'] },
		{ open: "'", close: "'", notIn: ['string'] }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" }
	]
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: 'invalid',
	ignoreCase: true,
	tokenPostfix: '.sas',

	brackets: [
		{ token: 'delimiter.bracket', open: '{', close: '}' },
		{ token: 'delimiter.parenthesis', open: '(', close: ')' },
		{ token: 'delimiter.square', open: '[', close: ']' }
	],

	keywords: ['libname', 'filename'],

	//
	// Built-in Functions
	builtinFunctions: ['abs', 'acos', 'asin', 'atan', 'xstrlen'],

	//
	// Operators
	//
	// Operators that can be part of statements have been moved to keywords
	//
	operators: [
		// arithmetic operators
		' +',
		'*',
		'**',
		'-',
		'/'
	],

	tokenizer: {
		root: [
			{ include: '@whitespace' },

			{ include: '@datastep' },
			{ include: '@globalstatement' },
			{ include: '@ODSstatement' },
			{ include: '@options' },
			{ include: '@procstep' },
			{ include: '@specialparser' },
			{ include: '@sql' }
		],
		whitespace: [
			[/[ \t\r\n]+/, ''],
			[/^\*.*$/, 'comment'],
			[/\".*$/, 'comment']
		]
	}
};
