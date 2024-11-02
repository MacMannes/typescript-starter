import { isDefined } from '@utils/array';

export class HelloWorld {
    sayHello(): string {
        const words: unknown[] = ['Hello', undefined, 'World'];

        return words.filter(isDefined).join(' ');
    }
}
