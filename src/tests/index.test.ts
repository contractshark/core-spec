import test from 'ava';
import * as contractshark from '..';

test('exposes Spec class', async (t) => {
  t.is(!!contractshark.Spec, true);
});

test('exposes Stage class', async (t) => {
  t.is(!!contractshark.Stage, true);
});

test('exposes Context class', async (t) => {
  t.is(!!contractshark.Context, true);
});
