/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
import RoomBuilder from './room-builder';
import KitchenRoom from './kitchen-room';
import Door from './door';
import Window from './window';
import Wall from './wall';
/**
 * @desc
 *
 */
export default class KitchenRoomBuilder extends RoomBuilder {
  /**
   * @desc
   *
   */
  createRoom() {
    this.room = new KitchenRoom();
  }

  /**
   * @desc
   *
   */
  addDoor() {
    this.room.setPart('SDoor', new Door());
  }

  /**
   * @desc
   *
   */
  addWindow() {
    this.room.setPart('NWindow', new Window());
    this.room.setPart('WWindow', new Window());
    this.room.setPart('EWindow', new Window());
  }

  /**
   * @desc
   *
   */
  addWall() {
    this.room.setPart('NWall', new Wall());
    this.room.setPart('SWall', new Wall());
    this.room.setPart('EWall', new Wall());
    this.room.setPart('WWall', new Wall());
  }

  /**
   * @desc
   *
   * @return {BedRoom}
   */
  getRoom() {
    return this.room;
  }
}
