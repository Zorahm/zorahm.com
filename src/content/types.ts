export type Lang = "en" | "ru";

export const LANGS: Lang[] = ["en", "ru"];

export const SITE_URL = "https://zorahm.com";

export type ShapeId =
  | "saturn"
  | "noise"
  | "network"
  | "eye"
  | "globe"
  | "ripple"
  | "github"
  | "mark";

export type FrameAlign = "left" | "right" | "center";

export type Paragraph = {
  text: string;
  /** Приглушённый цвет — в исходнике класс .muted */
  muted?: boolean;
};

/**
 * Неязыковая часть кадра: порядок, композиция, поведение поля.
 * Держится отдельно от текстов, чтобы правка перевода не могла разъехаться
 * с версткой и наоборот.
 */
export type FrameStructure = {
  id: ShapeId;
  align: FrameAlign;
  /**
   * Доля точек, окрашенных в золото, среди самых ярких (v > 0.93).
   * 0 — золота нет вовсе, 1 — все яркие точки золотые.
   */
  accent: number;
  /** Первый кадр: заголовок уровня h1 и увеличенная высота секции */
  hero?: boolean;
  /** Крупная ссылка под текстом */
  cta?: { href: string; label: string };
  /** Показать блок контактов */
  contacts?: boolean;
};

/** Языковая часть кадра */
export type FrameText = {
  /** Подпись кадра в HUD */
  label: string;
  eyebrow: string;
  title: string;
  body: Paragraph[];
};

export type Frame = FrameStructure & FrameText;

/** Строки интерфейса вне кадров */
export type UiStrings = {
  /** Название языка в переключателе */
  langName: string;
  /** Подпись счётчика кадров в HUD */
  frameWord: string;
  contactsLabel: string;
  contactEmail: string;
  siteDescription: string;
  siteTitle: string;
  /** Подпись ссылки на другой язык для скринридеров */
  switchLanguage: string;
};
