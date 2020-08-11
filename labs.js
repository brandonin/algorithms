
/*

interface Item {
    name: string;
    quality: number;
    useIn: number;
    refridgerated: boolean;
}

enum SpecialItems {
    BACTERIAL_CULTURE = "Bacterial Culture",
    THERMOMETER = "Thermometer",
    FLU_VACCINE = "Flu Vaccine",
}
*/

class Item {
    constructor(name, useIn, quality, refridgerated) {
        this.name = name;
        this.useIn = useIn;
        this.quality = quality;
        this.refridgerated = refridgerated;
    }
}

SpecialItems =  {
    THERMOMETER: "Thermometer",
    BACTERIAL_CULTURE: "Bacterial Culture",
    FLU_VACCINE: "Flu Vaccine",
}

const specialItemsConstructor = {
    [SpecialItems.THERMOMETER]: (item) => {
        return item;
    },
    [SpecialItems.BACTERIAL_CULTURE]: (item) => {
        item.useIn--;
        isExpired(item.useIn)
            ? item.quality+=2
            : item.quality++;

        item.quality = Math.floor(item.quality, 50);
    },
    [SpecialItems.FLU_VACCINE]: (item) => {
        item.useIn--;
        if (item.useIn > 10) {
            item.quality++;
        } else if (item.useIn > 5) {
            item.quality += 2;
        } else if (!isExpired()) {
            item.quality += 3;
        } else {
            item.quality = 0;
        }
    }
}

const isExpired = (useIn) => useIn < 0;

class LabStock {
    static items; // Items[]
    static powerOutage; // boolean

    constructor(items, powerOutage = false) {
        this.items = items;
        this.powerOutage = powerOutage;
    }

    updateQuality() {
        this.items.forEach(item => {
            if (specialItemsConstructor[item.name]) {
                specialItemsConstructor[item.name](item);
            } else {
                item.useIn--;
                if (isExpired()) {
                    item.quality = Math.max(item.quality -= 2, 0);
                } else {
                    Math.max(item.quality -= 1, 0);
                }
            }
        })
    }

}

const thermometer = {
    name: SpecialItems.THERMOMETER,
    quality: 10,
    useIn: 30,
}

const bacteria = {
    name: SpecialItems.BACTERIAL_CULTURE,
    quality: 20,
    useIn: 30,
}

const flu = {
    name: SpecialItems.FLU_VACCINE,
    quality: 15,
    useIn: 10,
}

const standard = {
    name: "standard",
    quality: 10,
    useIn: 5,
}

const labStock = new LabStock([thermometer, bacteria, flu, standard]);

labStock.updateQuality();
labStock.updateQuality();
labStock.updateQuality();
labStock.updateQuality();


const Mocha = require('mocha');
const expect = require('chai').expect;
const mocha = new Mocha();

/**
  Welcome to the One Medical Lab! We have a number of items in stock to make sure
  we can keep our patients happy and healthy.
  In our lab, our items degrade in quality as they approach their expiration
  date. In order to keep track of this, we have a service that updates our
  inventory for us. This was built by one of our past employees a few years back
  and is beginning to look dusty.
  Basic Parameters for all items:
    - All items have a useIn value, which denotes the number of days we have to
    use the item before the expiration date
    - All items have a quality value, which is never negative and never greater
    than 50
  Daily updates for normal items:
    - The useIn and quality values decrease by 1
    - Once the expiration date has passed, the quality value decreases twice as
    fast
  Daily updates for special items:
    - For "Thermometer" items, since they are nonperishable, the quality and
    useIn value are not changed
    - For "Bacterial Culture" items, the useIn value decreases by 1, while the
    quality value increases by 1.  If the bacterial culture item has expired,
    then the quality increases twice as fast.
    - For "Flu Vaccine" items, the useIn value decreases by 1, and the quality
    value is updated according to the following rules:
        - Quality increases by 1 when there are more than 10 days before
        expiration
        - Quality increases by 2 when there are 6 to 10 days before expiration
        - Quality increases by 3 when there are 5 days or fewer before expiration
        - Quality drops to 0 when the flu vaccine has expired
  We have recently decided to stock a number of refrigerated medications. This
  requires an update to our system, as we sometimes have power outages.
  NEW functionality - Daily updates for refrigerated items:
    - During a power outage, refrigerated normal items decrease in quality twice
    as fast as non-refrigerated items
    - The quality of a refrigerated “Bacterial Culture” does not increase.  If
    there is a power outage, the quality of the refrigerated bacterial culture
    increases by 1 if it has not expired, and by 2 if it has expired.
  The new updating functionality applies only to refrigerated items.
  Non-refrigerated items should continue being updated as before.
  In order to add these new features, feel free to make any changes to the
  updateQuality method and add any new code. However, please do not alter the
  Item class. Keep in mind that your team will eventually have to add more
  functionality to this, therefore refactoring for readability is important.
 **/

// class LabInventoryManager {
//     constructor(items, powerOutage = false) {
//         this.items = items;
//         this.powerOutage = powerOutage;
//     }

//     updateQuality() {
//         for (var i = 0; i < this.items.length; i++) {
//             if (
//                 this.items[i].name !== 'Bacterial Culture' &&
//                 this.items[i].name !== 'Flu Vaccine'
//             ) {
//                 if (this.items[i].quality > 0) {
//                     if (this.items[i].name !== 'Thermometer') {
//                         this.items[i].quality = this.items[i].quality - 1;
//                     }
//                 }
//             } else {
//                 if (this.items[i].quality < 50) {
//                     this.items[i].quality = this.items[i].quality + 1;
//                     if (this.items[i].name === 'Flu Vaccine') {
//                         if (this.items[i].useIn < 11) {
//                             if (this.items[i].quality < 50) {
//                                 this.items[i].quality = this.items[i].quality + 1;
//                             }
//                         }
//                         if (this.items[i].useIn < 6) {
//                             if (this.items[i].quality < 50) {
//                                 this.items[i].quality = this.items[i].quality + 1;
//                             }
//                         }
//                     }
//                 }
//             }
//             if (this.items[i].name !== 'Thermometer') {
//                 this.items[i].useIn = this.items[i].useIn - 1;
//             }
//             if (this.items[i].useIn < 0) {
//                 if (this.items[i].name !== 'Bacterial Culture') {
//                     if (this.items[i].name !== 'Flu Vaccine') {
//                         if (this.items[i].quality > 0) {
//                             if (this.items[i].name !== 'Thermometer') {
//                                 this.items[i].quality = this.items[i].quality - 1;
//                             }
//                         }
//                     } else {
//                         this.items[i].quality = this.items[i].quality - this.items[i].quality;
//                     }
//                 } else {
//                     if (this.items[i].quality < 50) {
//                         this.items[i].quality = this.items[i].quality + 1;
//                     }
//                 }
//             }
//         }
//     }
// }


// /** Item Class ****************************************************************/

// class Item {
//     constructor(name, useIn, quality, refrigerated) {
//         this.name = name;
//         this.useIn = useIn;
//         this.quality = quality;
//         this.refrigerated = refrigerated;
//     }
// }

// /** Specs *********************************************************************/

// // Required to function correctly within CoderPad
// mocha.suite.emit('pre-require', this, 'solution', mocha);

// const buildItem = (itemDetails) => {
//     return new Item(
//         itemDetails.name,
//         itemDetails.useIn,
//         itemDetails.quality,
//         itemDetails.refrigerated || false
//     )
// }

// describe('LabInventoryManager', () => {
//     describe('updateQuality', () => {
//         let itemDetails;

//         describe('Normal Items', () => {
//             beforeEach(() => {
//                 itemDetails = {
//                     name: 'Normal Item',
//                     useIn: 10,
//                     quality: 25,
//                     powerOutage: false
//                 };
//             })

//             it('decrements useIn by 1', () => {
//                 const item = buildItem(itemDetails);
//                 const manager = new LabInventoryManager([item], false);
//                 manager.updateQuality();
//                 expect(item.useIn).to.equal(9);
//             });

//             it('decrements quality by 1', () => {
//                 const item = buildItem(itemDetails);
//                 const manager = new LabInventoryManager([item], false);
//                 manager.updateQuality();
//                 expect(item.quality).to.equal(24);
//             });

//             context('when the useIn date has passed', () => {
//                 it('decrements quality by 2', () => {
//                     itemDetails.useIn = 0;
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(23)
//                 });
//             });

//             context('when the quality is 0', () => {
//                 it('does not decrement quality', () => {
//                     itemDetails.quality = 0
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(0)
//                 });
//             });
//         });

//         describe('Bacterial Cultures', () => {
//             beforeEach(() => {
//                 itemDetails = {
//                     name: 'Bacterial Culture',
//                     useIn: 10,
//                     quality: 25,
//                 };
//             });

//             it('decrements useIn by 1', () => {
//                 const item = buildItem(itemDetails);
//                 const manager = new LabInventoryManager([item], false);
//                 manager.updateQuality();
//                 expect(item.useIn).to.equal(9);
//             });

//             it('increments quality by 1', () => {
//                 const item = buildItem(itemDetails);
//                 const manager = new LabInventoryManager([item], false);
//                 manager.updateQuality();
//                 expect(item.quality).to.equal(26);
//             });

//             context('when the quality is 50', () => {

//                 it('does not increment quality', () => {
//                     itemDetails.quality = 50;
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(50);
//                 });
//             });

//             context('when the bacterial culture is expired', () => {
//                 beforeEach(() => (itemDetails.useIn = 0));

//                 it('increases quality by 2', () => {
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(27);
//                 });

//                 context('when the quality is 49', () => {
//                     beforeEach(() => (itemDetails.quality = 49));

//                     it('does not increase quality above 50', () => {
//                         const item = buildItem(itemDetails);
//                         const manager = new LabInventoryManager([item], false);
//                         manager.updateQuality();
//                         expect(item.quality).to.equal(50);
//                     });
//                 });
//             });
//         });

//         describe('Thermometer', () => {
//             var itemDetails;

//             beforeEach(() => {
//                 itemDetails = {
//                     name: 'Thermometer',
//                     useIn: 10,
//                     quality: 25,
//                 };
//             });

//             it('does not change useIn', () => {
//                 const item = buildItem(itemDetails);
//                 const manager = new LabInventoryManager([item], false);
//                 manager.updateQuality();
//                 expect(item.useIn).to.equal(10);
//             });

//             it('does not change quality', () => {
//                 const item = buildItem(itemDetails);
//                 const manager = new LabInventoryManager([item], false);
//                 manager.updateQuality();
//                 expect(item.quality).to.equal(25);
//             });
//         });

//         describe('Flu Vaccine', () => {

//             beforeEach(() => {
//                 itemDetails = {
//                     name: 'Flu Vaccine',
//                     useIn: 11,
//                     quality: 25,
//                 };
//             });

//             it('decrements useIn by 1', () => {
//                 const item = buildItem(itemDetails);
//                 const manager = new LabInventoryManager([item], false);
//                 manager.updateQuality();
//                 expect(item.useIn).to.equal(10);
//             });

//             it('increments quality by 1', () => {
//                 const item = buildItem(itemDetails);
//                 const manager = new LabInventoryManager([item], false);
//                 manager.updateQuality();
//                 expect(item.quality).to.equal(26);
//             });

//             context('when the quality is 50', () => {
//                 beforeEach(() => (itemDetails.quality = 50));

//                 it('does not increment quality', () => {
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(50);
//                 });
//             });

//             context('when there are 6 to 10 days remaining in flu season', () => {
//                 beforeEach(() => (itemDetails.useIn = 10));

//                 it('increments quality by 2', () => {
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(27);
//                 });

//                 context('when the quality is 49', () => {
//                     beforeEach(() => (itemDetails.quality = 49));

//                     it('does not increment quality above 50', () => {
//                         const item = buildItem(itemDetails);
//                         const manager = new LabInventoryManager([item], false);
//                         manager.updateQuality();
//                         expect(item.quality).to.equal(50);
//                     });
//                 });
//             });

//             context('when there are 1 to 5 days remaining in flu season', () => {
//                 beforeEach(() => (itemDetails.useIn = 5));

//                 it('increments quality by 3', () => {
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(28);
//                 });

//                 context('when the quality is 48', () => {
//                     beforeEach(() => (itemDetails.quality = 48));

//                     it('does not increment quality above 50', () => {
//                         const item = buildItem(itemDetails);
//                         const manager = new LabInventoryManager([item], false);
//                         manager.updateQuality();
//                         expect(item.quality).to.equal(50);
//                     });
//                 });
//             });

//             context('when flu season is over', () => {
//                 beforeEach(() => (itemDetails.useIn = 0));

//                 it('sets quality to 0', () => {
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(0);
//                 });
//             });
//         });

//         // Remove `.skip` below to unmark these tests as "pending"
//         describe.skip('refrigerated items', () => {
//             var itemDetails;

//             beforeEach(() => {
//                 itemDetails = {
//                     name: 'Normal Item',
//                     useIn: 10,
//                     quality: 25,
//                     refrigerated: true
//                 };
//             });

//             context('if the item is a bacterial culture', () => {
//                 beforeEach(() => (itemDetails.name = 'Bacterial Culture'));

//                 it('does not change quality', () => {
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], false);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(25);
//                 });

//                 after(() => {
//                     itemDetails.name = 'Normal Item';
//                 });
//             });

//             context('if there was a power outage', () => {
//                 it('decrements quality by 2', () => {
//                     const item = buildItem(itemDetails);
//                     const manager = new LabInventoryManager([item], true);
//                     manager.updateQuality();
//                     expect(item.quality).to.equal(23);
//                 });

//                 context('if useIn is 0', () => {
//                     beforeEach(() => (itemDetails.useIn = 0));

//                     it('decrements quality by 4', () => {
//                         const item = buildItem(itemDetails);
//                         const manager = new LabInventoryManager([item], true);
//                         manager.updateQuality();
//                         expect(item.quality).to.equal(21);
//                     });

//                     after(() => {
//                         itemDetails.useIn = 10;
//                     });
//                 });

//                 context('if the item is a bacterial culture', () => {
//                     beforeEach(() => (itemDetails.name = 'Bacterial Culture'));

//                     it('increments quality by 1', () => {
//                         const item = buildItem(itemDetails);
//                         const manager = new LabInventoryManager([item], true);
//                         manager.updateQuality();
//                         expect(item.quality).to.equal(26);
//                     });

//                     context('if useIn is 0', () => {
//                         beforeEach(() => (itemDetails.useIn = 0));

//                         it('increments quality by 2', () => {
//                             const item = buildItem(itemDetails);
//                             const manager = new LabInventoryManager([item], true);
//                             manager.updateQuality();
//                             expect(item.quality).to.equal(27);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// mocha.run();
