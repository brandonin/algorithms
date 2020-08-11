
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

const Mocha = require('mocha');
const expect = require('chai').expect;
const mocha = new Mocha();

const LabEnum = {
    THERMOMETER:       "Thermometer",
    NORMAL_ITEM:       "Normal Item",
    FLU_VACCINE:       "Flu Vaccine",
    BACTERIAL_CULTURE: "Bacterial Culture",
}

const isExpired = useIn => useIn <= 0;


const updateInventoryUtil = {
    [LabEnum.THERMOMETER]: item => {
        return; 
    },
    [LabEnum.NORMAL_ITEM]: (item, powerOutage) => {
        let decreaseItemQuality = isExpired(item.useIn) ? 2 : 1;
        if (item.refrigerated && powerOutage) {
            decreaseItemQuality *= 2;
        }
        
        item.useIn--;
        item.quality = Math.max(0, item.quality - decreaseItemQuality);
    },
    [LabEnum.FLU_VACCINE]: item => {
        item.quality++;
        if (item.useIn < 11) {
            item.quality++;
        }
        if (item.useIn < 6) {
            item.quality++;
        }
        
        if (isExpired(item.useIn)) {
            item.quality = 0;
        }
        
        item.useIn--;
        item.quality = Math.min(50, item.quality);
    },
    [LabEnum.BACTERIAL_CULTURE]: (item, powerOutage) => {
        let increaseItemQuality = isExpired(item.useIn) ? 2 : 1;
        
        if (item.refrigerated && !powerOutage) {
            increaseItemQuality = 0;
        }
        
        item.useIn--;
        item.quality = Math.min(50, item.quality + increaseItemQuality);
    }
};


class LabInventoryManager {
    constructor(items, powerOutage = false) {
        this.items = items;
        this.powerOutage = powerOutage;
    }

    updateQuality() {
        this.items.forEach(value => {
            updateInventoryUtil[value.name](value, this.powerOutage);
        })
    }
}


/** Item Class ****************************************************************/

class Item {
    constructor(name, useIn, quality, refrigerated) {
        this.name = name;
        this.useIn = useIn;
        this.quality = quality;
        this.refrigerated = refrigerated;
    }
}

/** Specs *********************************************************************/

// Required to function correctly within CoderPad
mocha.suite.emit('pre-require', this, 'solution', mocha);

const buildItem = (itemDetails) => {
    return new Item(
        itemDetails.name,
        itemDetails.useIn,
        itemDetails.quality,
        itemDetails.refrigerated || false
    )
}

describe('LabInventoryManager', () => {
    describe('updateQuality', () => {
        let itemDetails;

        describe('Normal Items', () => {
            beforeEach(() => {
                itemDetails = {
                    name: 'Normal Item',
                    useIn: 10,
                    quality: 25,
                    powerOutage: false
                };
            })

            it('decrements useIn by 1', () => {
                const item = buildItem(itemDetails);
                const manager = new LabInventoryManager([item], false);
                manager.updateQuality();
                expect(item.useIn).to.equal(9);
            });

            it('decrements quality by 1', () => {
                const item = buildItem(itemDetails);
                const manager = new LabInventoryManager([item], false);
                manager.updateQuality();
                expect(item.quality).to.equal(24);
            });

            context('when the useIn date has passed', () => {
                it('decrements quality by 2', () => {
                    itemDetails.useIn = 0;
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(23)
                });
            });

            context('when the quality is 0', () => {
                it('does not decrement quality', () => {
                    itemDetails.quality = 0
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(0)
                });
            });
        });

        describe('Bacterial Cultures', () => {
            beforeEach(() => {
                itemDetails = {
                    name: 'Bacterial Culture',
                    useIn: 10,
                    quality: 25,
                };
            });

            it('decrements useIn by 1', () => {
                const item = buildItem(itemDetails);
                const manager = new LabInventoryManager([item], false);
                manager.updateQuality();
                expect(item.useIn).to.equal(9);
            });

            it('increments quality by 1', () => {
                const item = buildItem(itemDetails);
                const manager = new LabInventoryManager([item], false);
                manager.updateQuality();
                expect(item.quality).to.equal(26);
            });

            context('when the quality is 50', () => {

                it('does not increment quality', () => {
                    itemDetails.quality = 50;
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(50);
                });
            });

            context('when the bacterial culture is expired', () => {
                beforeEach(() => (itemDetails.useIn = 0));

                it('increases quality by 2', () => {
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(27);
                });

                context('when the quality is 49', () => {
                    beforeEach(() => (itemDetails.quality = 49));

                    it('does not increase quality above 50', () => {
                        const item = buildItem(itemDetails);
                        const manager = new LabInventoryManager([item], false);
                        manager.updateQuality();
                        expect(item.quality).to.equal(50);
                    });
                });
            });
        });

        describe('Thermometer', () => {
            var itemDetails;

            beforeEach(() => {
                itemDetails = {
                    name: 'Thermometer',
                    useIn: 10,
                    quality: 25,
                };
            });

            it('does not change useIn', () => {
                const item = buildItem(itemDetails);
                const manager = new LabInventoryManager([item], false);
                manager.updateQuality();
                expect(item.useIn).to.equal(10);
            });

            it('does not change quality', () => {
                const item = buildItem(itemDetails);
                const manager = new LabInventoryManager([item], false);
                manager.updateQuality();
                expect(item.quality).to.equal(25);
            });
        });

        describe('Flu Vaccine', () => {

            beforeEach(() => {
                itemDetails = {
                    name: 'Flu Vaccine',
                    useIn: 11,
                    quality: 25,
                };
            });

            it('decrements useIn by 1', () => {
                const item = buildItem(itemDetails);
                const manager = new LabInventoryManager([item], false);
                manager.updateQuality();
                expect(item.useIn).to.equal(10);
            });

            it('increments quality by 1', () => {
                const item = buildItem(itemDetails);
                const manager = new LabInventoryManager([item], false);
                manager.updateQuality();
                expect(item.quality).to.equal(26);
            });

            context('when the quality is 50', () => {
                beforeEach(() => (itemDetails.quality = 50));

                it('does not increment quality', () => {
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(50);
                });
            });

            context('when there are 6 to 10 days remaining in flu season', () => {
                beforeEach(() => (itemDetails.useIn = 10));

                it('increments quality by 2', () => {
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(27);
                });

                context('when the quality is 49', () => {
                    beforeEach(() => (itemDetails.quality = 49));

                    it('does not increment quality above 50', () => {
                        const item = buildItem(itemDetails);
                        const manager = new LabInventoryManager([item], false);
                        manager.updateQuality();
                        expect(item.quality).to.equal(50);
                    });
                });
            });

            context('when there are 1 to 5 days remaining in flu season', () => {
                beforeEach(() => (itemDetails.useIn = 5));

                it('increments quality by 3', () => {
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(28);
                });

                context('when the quality is 48', () => {
                    beforeEach(() => (itemDetails.quality = 48));

                    it('does not increment quality above 50', () => {
                        const item = buildItem(itemDetails);
                        const manager = new LabInventoryManager([item], false);
                        manager.updateQuality();
                        expect(item.quality).to.equal(50);
                    });
                });
            });

            context('when flu season is over', () => {
                beforeEach(() => (itemDetails.useIn = 0));

                it('sets quality to 0', () => {
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(0);
                });
            });
        });

        // Remove `.skip` below to unmark these tests as "pending"
        describe('refrigerated items', () => {
            var itemDetails;

            beforeEach(() => {
                itemDetails = {
                    name: 'Normal Item',
                    useIn: 10,
                    quality: 25,
                    refrigerated: true
                };
            });

            context('if the item is a bacterial culture', () => {
                beforeEach(() => (itemDetails.name = 'Bacterial Culture'));

                it('does not change quality', () => {
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], false);
                    manager.updateQuality();
                    expect(item.quality).to.equal(25);
                });

                after(() => {
                    itemDetails.name = 'Normal Item';
                });
            });

            context('if there was a power outage', () => {
                it('decrements quality by 2', () => {
                    const item = buildItem(itemDetails);
                    const manager = new LabInventoryManager([item], true);
                    manager.updateQuality();
                    expect(item.quality).to.equal(23);
                });

                context('if useIn is 0', () => {
                    beforeEach(() => (itemDetails.useIn = 0));

                    it('decrements quality by 4', () => {
                        const item = buildItem(itemDetails);
                        const manager = new LabInventoryManager([item], true);
                        manager.updateQuality();
                        expect(item.quality).to.equal(21);
                    });

                    after(() => {
                        itemDetails.useIn = 10;
                    });
                });

                context('if the item is a bacterial culture', () => {
                    beforeEach(() => (itemDetails.name = 'Bacterial Culture'));

                    it('increments quality by 1', () => {
                        const item = buildItem(itemDetails);
                        const manager = new LabInventoryManager([item], true);
                        manager.updateQuality();
                        expect(item.quality).to.equal(26);
                    });

                    context('if useIn is 0', () => {
                        beforeEach(() => (itemDetails.useIn = 0));

                        it('increments quality by 2', () => {
                            const item = buildItem(itemDetails);
                            const manager = new LabInventoryManager([item], true);
                            manager.updateQuality();
                            expect(item.quality).to.equal(27);
                        });
                    });
                });
            });
        });
    });
});

mocha.run();

/*
Coding Interviews
This is a collection of problems used in our programming evaluation of candidates

Getting Setup for Remote Coding Interviews
* Make sure you're part of the One Medical Coderpad.io team. If this is your first time conducting an interview with Coderpad, drop into the #pd-interview-support channel and ask someone to invite you. Once you receive an invite, you will have access to our interview questions. 
* Call the candidate on the number provided in the calendar invite and/or the candidate's Greenhouse profile.
    * Introduce yourself and exchange pleasantries: tell them your name and what your role is.
    * Let them know you will be doing a remote coding interview with them.
    * Verify their language of choice for the coding interview.
* Walk them through what to expect:
    * They will have 60 minutes to complete the task and we will leave 10 minutes at the end of the interview to answer questions about One Medical.
    * Give the candidate the following prompt or similar: "Our task is to add new features to an existing Lab Inventory service that I will share with you shortly. Keep in mind that your team will eventually have to add more functionality to this, therefore refactoring for readability is important. It's okay if we don't get everything working in the timeframe. [add use case here]. I'm here to give you hints and unblock you to make our time productive."
    * You will now email them a link to the coderpad (at this point most people are familiar with coderpad). You can find the candidate's email address on the right-side of scorecard in Greenhouse.
    * Once they receive the invitation and access the coderpad, offer them the option of listening to you give the directions, or to read through them and ask any questions.
    * Before they get started:
        * Check to make sure the candidate understands the goal of the exercise and refactoring is equally as important as the new functionality
        * Check to make sure the candidate understands that the specs for existing and new functionality are implemented, and can be run with the Run button at the top
        * Remind the candidate they can run tests as often as they'd like
        * Ask the candidate to talk through what they are thinking as they go
        * point out any specific requirements they should pay close attention to
* Should be good to go from here. 

Closing Up
Try to leave some time for any additional questions about One Medical. Be prepared to answer some of the following questions:
* What are some of the technical challenges are you and the engineering team facing?
* What is your favorite thing about working at One Medical? What gets you excited?
* What are teams working on right now?
* What is the biggest opportunity for engineering now?
* What is the company/team culture like?
If you are excited about the candidate and they check all your boxes early, take any time to sell them, talk more about your work etc. Make sure to thank them for their time and let them know that our recruiting team will be in touch within 24 hours.

Evaluation Guidelines
These are things you may want to think about during and after you've proctored the interview problem to guide your final decision on they candidate's performance.
* Does the candidate respond to feedback well?
    * If they are given the hint to gear more towards refactoring, do they take it or ignore the hint and continue down a rabbit hole? If they ignore the hint, are they able to acknowledge it and provide reasoning for their decision to continue in a different direction?
* Does the candidate exhibit refactoring instincts? Do they identify the opportunity to refactor and leave the code better than they found it?
    * Bonus: are they able to negotiate spending time to refactor before implementation of new functionality?
* Is the candidate able to communicate concerns with the requirements and ask questions to clarify expectations?
* Does the candidate have the ability to reflect on what they could have done differently given more time or additional work to make the solution better?
    * Bonus: was the candidate able to provide these thoughts without prompting? If not, end your session with this question (or something similar): "Do you have any additional thoughts on what you could have done differently or what additonal work you would do if you had more time to work on this problem?"

Acknowledgments
* Hat tip 🎩 to everyone that has participated in shadowing and proctoring the problems, sharing feedback about the process and making it better 🎉

*/
