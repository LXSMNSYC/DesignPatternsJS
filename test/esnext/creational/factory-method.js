/* eslint-disable no-undef */
import assert from 'assert';

import Circle from '../../../src/esnext/creational/factory-method/circle';
import CircleContainer from '../../../src/esnext/creational/factory-method/circle-container';

import Rect from '../../../src/esnext/creational/factory-method/rect';
import RectContainer from '../../../src/esnext/creational/factory-method/rect-container';

describe('FactoryMethod', () => {
  describe('Circle', () => {
    const circle = new Circle(0, 0, 100);

    describe('#makeContainer', () => {
      it('should return a CircleContainer', () => {
        assert(circle.makeContainer() instanceof CircleContainer);
      });
    });

    describe('#containsPoint', () => {
      it('should return true if the point is in the CircleContainer', () => {
        assert(circle.hasPoint(0, 0));
      });
      it('should return false if the point is not in the CircleContainer', () => {
        assert(!circle.hasPoint(101, 0));
      });
    });
  });
  describe('Rect', () => {
    const rect = new Rect(0, 0, 100, 100);

    describe('#makeContainer', () => {
      it('should return a RectContainer', () => {
        assert(rect.makeContainer() instanceof RectContainer);
      });
    });

    describe('#containsPoint', () => {
      it('should return true if the point is in the RectContainer', () => {
        assert(rect.hasPoint(50, 50));
      });
      it('should return false if the point is not in the RectContainer', () => {
        assert(!rect.hasPoint(101, 50));
      });
    });
  });
});
