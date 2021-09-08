/**
 * game/assets/sounds
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetSound } from "core/types/assets";

/**
 * Stores all sould files for the game.
 */
export const SoundList: Array<AssetSound> = [
  {
    name: "sound.door",
    file: [
      require("assets/audio/sound.door.mp3"),
      require("assets/audio/sound.door.ogg"),
    ],
    autoDecode: false,
    ignore: false,
  },
  {
    name: "sound.lock",
    file: [
      require("assets/audio/sound.lock.mp3"),
      require("assets/audio/sound.lock.ogg"),
    ],
    autoDecode: false,
    ignore: false,
  },
];
