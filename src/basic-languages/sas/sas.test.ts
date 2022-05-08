/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { testTokenization } from '../test/testRunner';

testTokenization('sas', [
	[
		{
			line: '/* comment */',
			tokens: [{ startIndex: 0, type: 'comment.sas' }]
		}
	]
]);
