const { Magician, Daemon } = require('../character');

describe('Magician class', () => {
    test('calculates attack power without stoning', () => {
        const magician = new Magician();
        magician.attack = 100;

        expect(magician.attack).toBe(100);
    });

    test('calculates attack power with stoning', () => {
        const magician = new Magician();
        magician.attack = 100;
        magician.stoned = true;

        expect(magician.attack).toBe(85);
    });
});

describe('Daemon class', () => {
    test('calculates attack power without stoning', () => {
        const daemon = new Daemon();
        daemon.attack = 100;

        expect(daemon.attack).toBe(60);
    });

    test('calculates attack power with stoning', () => {
        const daemon = new Daemon();
        daemon.attack = 100;
        daemon.stoned = true;

        expect(daemon.attack).toBe(45);
    });
});