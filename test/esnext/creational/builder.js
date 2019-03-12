/* eslint-disable no-undef */
import assert from 'assert';

import Builder from '../../../src/esnext/creational/builder';

import LivingRoomBuilder from '../../../src/esnext/creational/builder/living-room-builder';
import LivingRoom from '../../../src/esnext/creational/builder/living-room';

import DiningRoomBuilder from '../../../src/esnext/creational/builder/dining-room-builder';
import DiningRoom from '../../../src/esnext/creational/builder/dining-room';

import BedRoomBuilder from '../../../src/esnext/creational/builder/bed-room-builder';
import BedRoom from '../../../src/esnext/creational/builder/bed-room';

import BathRoomBuilder from '../../../src/esnext/creational/builder/bath-room-builder';
import BathRoom from '../../../src/esnext/creational/builder/bath-room';

import KitchenRoomBuilder from '../../../src/esnext/creational/builder/kitchen-room-builder';
import KitchenRoom from '../../../src/esnext/creational/builder/kitchen-room';
/**
 */
describe('Builder', () => {
  /**
   */
  it('should build a LivingRoom', () => {
    assert(new Builder().build(new LivingRoomBuilder()) instanceof LivingRoom);
  });
  /**
   */
  it('should build a DiningRoom', () => {
    assert(new Builder().build(new DiningRoomBuilder()) instanceof DiningRoom);
  });
  /**
   */
  it('should build a BedRoom', () => {
    assert(new Builder().build(new BedRoomBuilder()) instanceof BedRoom);
  });
  /**
   */
  it('should build a BathRoom', () => {
    assert(new Builder().build(new BathRoomBuilder()) instanceof BathRoom);
  });
  /**
   */
  it('should build a KitchenRoom', () => {
    assert(new Builder().build(new KitchenRoomBuilder()) instanceof KitchenRoom);
  });
  /**
   *
   */
  it('should return undefined if the parameter is not a RoomBuilder', () => {
    assert(typeof (new Builder().build()) === 'undefined');
  });
});
