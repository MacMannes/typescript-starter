import { describe, expect, it } from 'vitest';
import { isDefined } from '@utils/array';

describe('isDefined', () => {
    it('should work as an array filter, returning only defined items', () => {
        const array = ['foo', undefined, 'bar'];
        const filteredArray = array.filter(isDefined);
        expect(filteredArray).toStrictEqual(['foo', 'bar']);
    });
});
