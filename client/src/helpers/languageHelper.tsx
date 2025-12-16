import { Assets } from "@assets";
import type { LanguageType } from "@store";

export class LanguageHelper {
  static getFlag = (
    lang: LanguageType | undefined,
    styles?: React.CSSProperties
  ) => {
    if (lang === "pt") {
      return (
        <Assets.Icons.Flags.PT
          width={styles?.["width"]}
          height={styles?.["height"]}
          style={{ width: "30px", height: "20px", ...styles }}
        />
      );
    }

    return (
      <Assets.Icons.Flags.EN
        width={styles?.["width"]}
        height={styles?.["height"]}
        style={{ width: "30px", height: "20px", ...styles }}
      />
    );
  };
}
