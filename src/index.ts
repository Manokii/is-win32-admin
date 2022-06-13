import { promisify } from "node:util";
import { platform as nodePlatform } from "node:os";

async function isAdmin() {
  const platform = nodePlatform();
  if (platform !== "win32") {
    throw new Error(
      "Unable to determine admin privileges. isAdmin is only available on Windows."
    );
  }

  const cpExec = promisify(require("child_process").exec);
  try {
    await cpExec("net session");
    return true;
  } catch {
    return false;
  }
}

export default isAdmin;
