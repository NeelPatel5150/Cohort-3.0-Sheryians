import os from "os";
import path from "path";

export const HOME_DIR = os.homedir(); //Users/Neel
export const CONFIG_DIR = path.join(HOME_DIR, ".beta"); //Users/Neel/.beta
