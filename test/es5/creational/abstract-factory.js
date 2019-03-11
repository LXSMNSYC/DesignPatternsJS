const assert = require('assert');
const TextDialogFactory = require('../../../src/es5/creational/abstract-factory/text-dialog-factory');
const TextDialogWindow = require('../../../src/es5/creational/abstract-factory/text-dialog-window');
const TextDialogButton = require('../../../src/es5/creational/abstract-factory/text-dialog-button');
const PasswordDialogFactory = require('../../../src/es5/creational/abstract-factory/password-dialog-factory');
const PasswordDialogWindow = require('../../../src/es5/creational/abstract-factory/password-dialog-window');
const PasswordDialogButton = require('../../../src/es5/creational/abstract-factory/password-dialog-button');

const FactoryType = require('../../../src/es5/creational/abstract-factory/factory-type');
const AbstractFactory = require('../../../src/es5/creational/abstract-factory');

/**
 */
describe('AbstractFactory', () => {
  /**
   */
  describe('create', () => {
    /**
     */
    describe('create(FactoryType.TEXT)', () => {
      const factory = AbstractFactory.create(FactoryType.TEXT);
      it('should create a TextDialogFactory', () => {
        assert(factory instanceof TextDialogFactory);
      });
      /**
       */
      describe('#createWindow', () => {
        const window = factory.createWindow("Hello World");
        it('can create TextDialogWindow', () => {
          assert(window instanceof TextDialogWindow);
        });
        /**
         */
        describe('#getTitle', () => {
          it('should return a string', () => {
            assert(typeof window.getTitle() === 'string');
          });
        });
      });
      /**
       */
      describe('#createButton', () => {
        const button = factory.createButton();
        it('can create TextDialogButton', () => {
          assert(button instanceof TextDialogButton);
        });
        /**
         */
        describe('#getText', () => {
          it('should return a string', () => {
            assert(typeof button.getText() === 'string');
          });
        });
      });
    });
    /**
     */
    describe('create(FactoryType.PASSWORD)', () => {
      const factory = AbstractFactory.create(FactoryType.PASSWORD);
      it('should create a PasswordDialogFactory', () => {
        assert(factory instanceof PasswordDialogFactory);
      });
      /**
       */
      describe('#createWindow', () => {
        const window = factory.createWindow("Hello World");
        it('can create PasswordDialogWindow', () => {
          assert(window instanceof PasswordDialogWindow);
        });
        /**
         */
        describe('#getTitle', () => {
          it('should return a string', () => {
            assert(typeof window.getTitle() === 'string');
          });
        });
      });
      /**
       */
      describe('#createButton', () => {
        const button = factory.createButton();
        it('can create PasswordDialogButton', () => {
          assert(button instanceof PasswordDialogButton);
        });
        /**
         */
        describe('#getPassword', () => {
          it('should return a string', () => {
            assert(typeof button.getText() === 'string');
          });
        });
      });
    });
    /**
     */
    describe('create()', () => {
      const factory = AbstractFactory.create();
      it('should return undefined', () => {
        assert(typeof factory === 'undefined');
      });
    });
  });
});
