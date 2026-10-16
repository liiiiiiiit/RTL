import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getNextDirection,
  encodeBookmarklet,
  getRawBookmarkletScript,
  FORCE_BOOKMARKLET_URL,
  MINIMAL_BOOKMARKLET_URL,
} from './bookmarklet.ts';

test('getNextDirection toggles rtl and ltr accurately', () => {
  assert.equal(getNextDirection('ltr'), 'rtl');
  assert.equal(getNextDirection('LTR'), 'rtl');
  assert.equal(getNextDirection('rtl'), 'ltr');
  assert.equal(getNextDirection('RTL'), 'ltr');
  assert.equal(getNextDirection(null), 'rtl');
  assert.equal(getNextDirection(undefined), 'rtl');
  assert.equal(getNextDirection(''), 'rtl');
});

test('encodeBookmarklet produces valid javascript: URI and encodes single quotes to %27', () => {
  const code = `(function() { var test = 'rtl'; })();`;
  const encoded = encodeBookmarklet(code);

  assert.ok(encoded.startsWith('javascript:'));
  assert.ok(encoded.includes('%27rtl%27'));
  assert.ok(!encoded.includes("'"));
});

test('FORCE_BOOKMARKLET_URL contains toast, force override, and encoded quotes', () => {
  assert.ok(FORCE_BOOKMARKLET_URL.startsWith('javascript:'));
  assert.ok(FORCE_BOOKMARKLET_URL.includes('%27dir%27'));
  assert.ok(FORCE_BOOKMARKLET_URL.includes('__dir_toggle_toast__'));
  assert.ok(FORCE_BOOKMARKLET_URL.includes('__dir_toggle_style__'));
  assert.ok(!FORCE_BOOKMARKLET_URL.includes("'"));
});

test('MINIMAL_BOOKMARKLET_URL is well-formed with %27 for quotes and executable syntax', () => {
  assert.ok(MINIMAL_BOOKMARKLET_URL.startsWith('javascript:'));
  assert.ok(MINIMAL_BOOKMARKLET_URL.includes('%27dir%27'));
  assert.ok(!MINIMAL_BOOKMARKLET_URL.includes("'"));
});
