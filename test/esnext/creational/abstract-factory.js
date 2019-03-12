/* eslint-disable no-undef */
import assert from 'assert';

import TextDialogFactory from '../../../src/esnext/creational/abstract-factory/text-dialog-factory';
import TextDialogWindow from '../../../src/esnext/creational/abstract-factory/text-dialog-window';
import TextDialogButton from '../../../src/esnext/creational/abstract-factory/text-dialog-button';

import PasswordDialogFactory from '../../../src/esnext/creational/abstract-factory/password-dialog-factory';
import PasswordDialogWindow from '../../../src/esnext/creational/abstract-factory/password-dialog-window';
import PasswordDialogButton from '../../../src/esnext/creational/abstract-factory/password-dialog-button';

import FactoryType from '../../../src/esnext/creational/abstract-factory/factory-type';
import AbstractFactory from '../../../src/esnext/creational/abstract-factory';

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
        const window = factory.createWindow('Hello World');
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
        const window = factory.createWindow('Hello World');
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
