import { describe, expect, it } from 'vitest';
import { HelloWorld } from './hello-world';

describe('HelloWorld', () => {
    it('should return "Hello World', () => {
        const hello = new HelloWorld();
        const result = hello.sayHello();
        expect(result).toBe('Hello World');
    });
});
