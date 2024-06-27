import ClassRoom from './0-classroom';

/**
 * Creates an array of ClassRoom with 3 objects
 * @returns An array of ClassRoom.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
