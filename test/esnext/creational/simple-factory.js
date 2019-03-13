/* eslint-disable no-undef */
import assert from 'assert';
import SimpleFactory from '../../../src/esnext/creational/simple-factory';
import Apple from '../../../src/esnext/creational/simple-factory/apple';
import Banana from '../../../src/esnext/creational/simple-factory/banana';

/**
 *
 */
describe('SimpleFactory', () => {
  /**
   *
   */
  const factory = new SimpleFactory();
  /**
   *
   */
  describe('#createApple', () => {
    /**
     *
     */
    it('should create an Apple', () => {
      /**
       *
       */
      assert(factory.createApple() instanceof Apple);
      describe('#eat', () => {
        /**
         *
         */
        it('should eat an apple.', () => {
          /**
           *
           */
          factory.createApple().eat();
        });
      });
    });
  });
  /**
   *
   */
  describe('#createBanana', () => {
    /**
     *
     */
    it('should create a Banana', () => {
      /**
       *
       */
      assert(factory.createBanana() instanceof Banana);
      describe('#eat', () => {
        /**
         *
         */
        it('should eat a Banana.', () => {
          /**
           *
           */
          factory.createBanana().eat();
        });
      });
    });
  });
});
