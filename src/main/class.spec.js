var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
describe('class', function () {
    it('has a constructor for initialization', function () {
        // Create a Musician class
        // Add a constructor that takes one param, the instrument.
        // Set this.instrument to the instrument passed in
        var Musician = /** @class */ (function () {
            function Musician(instrument) {
                this.instrument = instrument;
            }
            ;
            return Musician;
        }());
        ;
        var musician = new Musician('trumpet');
        var ringo = new Musician('drums');
        expect(musician.instrument).toBeUndefined();
        expect(ringo.instrument).toBe('drums');
    });
    it('constructor can have default param values', function () {
        // Create a Musician class with a constructor
        // Make your class default (using default params) the instrument to 'guitar'
        var Musician = /** @class */ (function () {
            function Musician(instrument) {
                if (instrument === void 0) { instrument = 'guitar'; }
                this.instrument = 'guitar';
                this.instrument = instrument;
            }
            ;
            return Musician;
        }());
        ;
        var john = new Musician();
        var ringo = new Musician('drums');
        expect(john.instrument).toBe('guitar');
        expect(ringo.instrument).toBe('drums');
    });
    it('can have instance methods', function () {
        // Create a Musician class, pass in the instrument to the constructor,
        // and add a play function to the class definition
        var Musician = /** @class */ (function () {
            function Musician(instrument) {
                this.instrument = instrument;
            }
            ;
            Musician.prototype.play = function () {
                console.log('I\'m playing ' + this.instrument);
            };
            ;
            return Musician;
        }());
        ;
        var musician = new Musician('drums');
        expect(musician.play).toBeDefined();
        // expect(Musician.play).toBeUndefined()
        expect(musician.play()).toBe("I'm playing drums");
    });
    it('can have static methods and properties', function () {
        // Create a Musician class, pass in the instrument to the constructor,
        // create a static property instances (that will hold all created instances) and
        // create a static method create that encapsulates calling constructor
        //   and storing the reference (in instances array) and returns the instance
        var Musician = /** @class */ (function () {
            function Musician(instrument) {
                this.instrument = instrument;
            }
            ;
            Musician.create = function (newObject) {
                var musician = new Musician(newObject);
                this.instances.push(musician);
                return musician;
            };
            ;
            return Musician;
        }());
        ;
        expect(Musician.create).toBeDefined();
        expect(Musician.instances.length).toBe(0);
        var john = Musician.create();
        // expect(john.create).toBeUndefined()
        expect(Musician.instances.length).toBe(1);
        var ringo = Musician.create('drums');
        // expect(ringo.create).toBeUndefined()
        expect(Musician.instances.length).toBe(2);
    });
    it('can extend another class', function () {
        // Create a Musician class
        // Create a Rockman class that extends Musician
        // Add play method to Musician
        var Musician = /** @class */ (function () {
            function Musician() {
            }
            Musician.prototype.play = function () {
                console.log('I\'m playing guitar');
            };
            ;
            return Musician;
        }());
        ;
        var Rockman = /** @class */ (function (_super) {
            __extends(Rockman, _super);
            function Rockman() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Rockman;
        }(Musician));
        ;
        var rockman = new Rockman();
        expect(rockman instanceof Rockman).toBe(true);
        expect(rockman instanceof Musician).toBe(true);
        expect(rockman.play()).toBe("I'm playing guitar");
    });
    it('can use property setters and getters', function () {
        // Create a Musician class, pass in the instrument to the constructor,
        // Add property getter for description
        var Musician = /** @class */ (function () {
            function Musician(instrument) {
                this.description = 'this musicien plays ' + this.instrument;
                this.instrument = instrument;
            }
            ;
            return Musician;
        }());
        ;
        var guitarist = new Musician('guitar');
        var drummer = new Musician('drums');
        expect(guitarist.description).toBe('this musician plays guitar');
        expect(drummer.description).toBe('this musician plays drums');
    });
    it('can use property setters and getters', function () {
        // Create a Musician class
        // Add property getter for allBands
        // - it will return a string describing all the bands that this musician played in
        // Add property setter for band
        // - it will add this band to the list of musician's bands'. How to store them?
        var Musician = /** @class */ (function () {
            function Musician(getterForAllBands) {
                this.band = this.band;
            }
            Musician.prototype.allBands = function () {
                var sentence = 'this musician played in ';
                for (var i = 0; i < this.band.length; i++) {
                    sentence += this.band;
                    if (i < this.band.length - 1) {
                        sentence += ' ';
                    }
                    ;
                }
                ;
                return sentence;
            };
            ;
            return Musician;
        }());
        ;
        var musician = new Musician();
        musician.band = 'ABBA';
        expect(musician.allBands).toBe('this musician played in ABBA');
        musician.band = 'Rolling Stones';
        expect(musician.allBands).toBe('this musician played in ABBA, Rolling Stones');
        musician.band = 'Iron Maiden';
        expect(musician.allBands).toBe('this musician played in ABBA, Rolling Stones, Iron Maiden');
    });
});
