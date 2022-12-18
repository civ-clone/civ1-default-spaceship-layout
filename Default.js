"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Fuel_1 = require("@civ-clone/base-spaceship-fuel/Fuel");
const Habitation_1 = require("@civ-clone/base-spaceship-habitation/Habitation");
const Layout_1 = require("@civ-clone/core-spaceship/Layout");
const LifeSupport_1 = require("@civ-clone/base-spaceship-life-support/LifeSupport");
const Power_1 = require("@civ-clone/base-spaceship-power/Power");
const Propulsion_1 = require("@civ-clone/base-spaceship-propulsion/Propulsion");
const Slot_1 = require("@civ-clone/core-spaceship/Slot");
const Structural_1 = require("@civ-clone/base-spaceship-structural/Structural");
// . null
// # Power
// S Structural
// F Fuel
// ~ Propulsion
// L LifeSupport
// H Habitation
// .........F~~
// .##..##.SSS
// .##..##.SF~~
// SSSSSSSSSF~~
// LLHHLLHHSSS
// LLHHLLHHSF~~
// HHLLHHLLSF~~
// HHLLHHLLSSS
// SSSSSSSSSF~~
// .##..##.SF~~
// .##..##.SSS
// .........F~~
class Default extends Layout_1.default {
    constructor(ruleRegistry = RuleRegistry_1.instance) {
        super(12, 12, [
            // .........F~~
            new Slot_1.default(9, 0, 1, 1, [Fuel_1.default]),
            new Slot_1.default(10, 0, 1, 2, [Propulsion_1.default]),
            // .##..##.SSS
            new Slot_1.default(1, 1, 2, 2, [Power_1.default]),
            new Slot_1.default(5, 1, 2, 2, [Power_1.default]),
            new Slot_1.default(8, 1, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 1, 1, 1, [Structural_1.default]),
            new Slot_1.default(10, 1, 1, 1, [Structural_1.default]),
            // .##..##.SF~~
            new Slot_1.default(8, 2, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 2, 1, 1, [Fuel_1.default]),
            new Slot_1.default(10, 2, 1, 2, [Propulsion_1.default]),
            // SSSSSSSSSF~~
            new Slot_1.default(0, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(1, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(2, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(3, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(4, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(5, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(6, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(7, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(8, 3, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 3, 1, 1, [Fuel_1.default]),
            new Slot_1.default(10, 3, 1, 2, [Propulsion_1.default]),
            // LLHHLLHHSSS
            new Slot_1.default(0, 4, 2, 2, [LifeSupport_1.default]),
            new Slot_1.default(2, 4, 2, 2, [Habitation_1.default]),
            new Slot_1.default(4, 4, 2, 2, [LifeSupport_1.default]),
            new Slot_1.default(6, 4, 2, 2, [Habitation_1.default]),
            new Slot_1.default(8, 4, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 4, 1, 1, [Structural_1.default]),
            new Slot_1.default(10, 4, 1, 1, [Structural_1.default]),
            // LLHHLLHHSF~~
            new Slot_1.default(8, 5, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 5, 1, 1, [Fuel_1.default]),
            new Slot_1.default(10, 5, 1, 2, [Propulsion_1.default]),
            // HHLLHHLLSF~~
            new Slot_1.default(0, 6, 2, 2, [Habitation_1.default]),
            new Slot_1.default(2, 6, 2, 2, [LifeSupport_1.default]),
            new Slot_1.default(4, 6, 2, 2, [Habitation_1.default]),
            new Slot_1.default(6, 6, 2, 2, [LifeSupport_1.default]),
            new Slot_1.default(8, 6, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 6, 1, 1, [Fuel_1.default]),
            new Slot_1.default(10, 6, 1, 2, [Propulsion_1.default]),
            // HHLLHHLLSSS
            new Slot_1.default(8, 7, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 7, 1, 1, [Structural_1.default]),
            new Slot_1.default(10, 7, 1, 1, [Structural_1.default]),
            // SSSSSSSSSF~~
            new Slot_1.default(0, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(1, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(2, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(3, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(4, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(5, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(6, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(7, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(8, 8, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 8, 1, 1, [Fuel_1.default]),
            new Slot_1.default(10, 8, 1, 2, [Propulsion_1.default]),
            // .##..##.SF~~
            new Slot_1.default(1, 9, 2, 2, [Power_1.default]),
            new Slot_1.default(5, 9, 2, 2, [Power_1.default]),
            new Slot_1.default(8, 9, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 9, 1, 1, [Fuel_1.default]),
            new Slot_1.default(10, 9, 1, 2, [Propulsion_1.default]),
            // .##..##.SSS
            new Slot_1.default(8, 10, 1, 1, [Structural_1.default]),
            new Slot_1.default(9, 10, 1, 1, [Structural_1.default]),
            new Slot_1.default(10, 10, 1, 1, [Structural_1.default]),
            // .........F~~
            new Slot_1.default(9, 11, 1, 1, [Fuel_1.default]),
            new Slot_1.default(10, 11, 1, 2, [Propulsion_1.default]),
        ], ruleRegistry);
    }
}
exports.Default = Default;
exports.default = Default;
//# sourceMappingURL=Default.js.map