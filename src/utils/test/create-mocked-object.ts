import type { MockedObject } from '@vitest/spy';
import { vi } from 'vitest';

type Class<T> = new (...args: unknown[]) => T;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type,@typescript-eslint/consistent-type-definitions
interface AbstractClass<T> extends Function {
    prototype: T;
}

/**
 * Utility that creates a type-safe mock based on its class,
 * by patching the prototype members that are methods with a Vitest-compatible spy function.
 */
export function createMockedObject<T>(type: Class<T> | AbstractClass<T>, template?: Partial<T>): MockedObject<T> {
    const mock: Partial<T> = template ? { ...template } : {};

    return installProtoMethods(mock, type.prototype);
}

/**
 * Utility that replaces all methods of a class (prototype) with a mock function.
 */
function installProtoMethods<T>(mock: Record<string, unknown>, proto: T): MockedObject<T> {
    if (proto === null || proto === Object.prototype) {
        return proto as MockedObject<T>;
    }

    for (const key of Object.getOwnPropertyNames(proto)) {
        const descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (!descriptor) {
            continue;
        }

        if (typeof descriptor.value === 'function' && key !== 'constructor' && typeof mock[key] === 'undefined') {
            mock[key] = vi.fn();
        } else if (descriptor.get && !Object.hasOwn(mock, key)) {
            Object.defineProperty(mock, key, {
                set: (value) => (mock[`_${key}`] = value),
                get: () => mock[`_${key}`],
                configurable: true,
            });
        }
    }

    installProtoMethods(mock, Object.getPrototypeOf(proto));

    mock.asWritable = () => mock;

    return mock as MockedObject<T>;
}
