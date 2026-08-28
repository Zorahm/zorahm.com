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

/**
 * Фигуры вне ленты кадров: живут на служебных страницах и потому не требуют
 * ни текстов кадра, ни места в FRAME_STRUCTURE.
 */
export type ExtraShapeId = "notfound" | "waifik" | "spirit";

export type AnyShapeId = ShapeId | ExtraShapeId;

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

/**
 * Экран без кадра: страница 404 и её пасхальное состояние собраны из одних
 * и тех же полей, поэтому переключение между ними — это подмена одного
 * объекта другим, а не набор отдельных строк.
 */
export type ScreenText = {
  eyebrow: string;
  title: string;
  body: string;
  /** Второй абзац, приглушённый */
  muted: string;
  /** Строка состояния в HUD, на месте счётчика кадров */
  status: string;
};

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
  /** Страница 404 */
  notFound: ScreenText;
  /** Она же после того, как нашли маскота */
  waifik: ScreenText;
  /** Ссылка на главную с 404 */
  notFoundHome: string;
  /** Что делает невидимая кнопка пасхалки — только для скринридеров */
  eggLabel: string;
  /** Страница /space */
  space: SpaceStrings;
  /** Страница /space-3d */
  space3d: Space3DStrings;
  /** Страница /spirit */
  spirit: SpiritStrings;
};

/** Тела на странице /space. Порядок — от Солнца наружу. */
export type BodyId =
  | "sun"
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

/**
 * Неязыковая часть тела: где оно на сцене и как выглядит.
 *
 * Радиусы орбит и скорости не астрономические, а подобранные: настоящие
 * пропорции дали бы четыре внутренние планеты в одной точке и Нептун с
 * периодом в полтора века. Сохранён только порядок и закон Кеплера —
 * чем дальше орбита, тем медленнее обращение.
 */
export type BodyStructure = {
  id: BodyId;
  /** Радиус орбиты в долях опорного масштаба сцены; у Солнца 0 */
  orbit: number;
  /** Фаза на орбите при нулевом времени, радианы */
  phase: number;
  /** Радиус точки тела в обзоре системы, в узлах сетки */
  dot: number;
  /** Доля золотых точек, когда тело раскрыто на весь экран */
  accent: number;
};

/** Языковая часть тела */
export type BodyText = {
  name: string;
  /** Строка над заголовком: тип тела и место в системе */
  eyebrow: string;
  /** Одна строка о главном */
  tagline: string;
  /** Четыре величины: подпись и значение */
  stats: { label: string; value: string }[];
  /** Абзац о том, что видно в кадре */
  body: string;
};

export type Body = BodyStructure & BodyText;

/** Строки интерфейса страницы /space */
export type SpaceStrings = {
  title: string;
  description: string;
  /** Заголовок обзора, когда ничего не выбрано */
  overview: string;
  /** Подсказка по управлению */
  hint: string;
  /** Подпись ряда с именами тел */
  bodiesLabel: string;
  /** Кнопка возврата к обзору системы */
  back: string;
  /** Подпись у Сатурна на главной: клик по нему ведёт сюда */
  enter: string;
  /** Ссылка на главную */
  home: string;
  /** Ссылка на трассированную версию сцены */
  view3d: string;
};

/**
 * Строки страницы /space-3d.
 *
 * Страница намеренно выпадает из стиля сайта, и её интерфейс — приборный:
 * счётчик кадров, панель параметров, горячие клавиши. Отсюда и набор строк,
 * которого нет больше нигде.
 */
export type Space3DStrings = {
  title: string;
  description: string;
  /** Строка под маркой: чем эта страница является */
  subtitle: string;
  /** Заголовок панели параметров */
  panel: string;
  /** Подписи ползунков */
  params: {
    time: string;
    exposure: string;
    orbits: string;
    glow: string;
    stars: string;
  };
  autoOrbit: string;
  reset: string;
  /** Подсказка по указателю */
  hint: string;
  /** Что делают горячие клавиши H, R, Space и F */
  keys: {
    hide: string;
    reset: string;
    auto: string;
    fullscreen: string;
  };
  /** Подпись, когда камера смотрит на систему целиком */
  overview: string;
  /** Подпись ряда с именами тел */
  bodiesLabel: string;
  /** Кнопка возврата к обзору системы */
  back: string;
  /** Ссылка на точечную версию сцены */
  dotsView: string;
  /** Сноска о том, что пропорции тел художественные */
  scaleNote: string;
  /** Экран отказа, когда WebGL недоступен */
  error: string;
};

/** Титулы на странице /spirit. Порядок — как шли финалы в тот день. */
export type SpiritMatchId = "dota" | "cs";

/**
 * Неязыковая часть титула.
 *
 * Счёт, соперник и состав лежат здесь по той же причине, что и орбиты тел:
 * у перевода не должно быть возможности разойтись с фактом. Ссылка рядом —
 * тот источник, по которому факт проверяется.
 */
export type SpiritMatchStructure = {
  id: SpiritMatchId;
  /** Дисциплина так, как её пишут в таблице */
  discipline: string;
  event: string;
  opponent: string;
  /** Счёт серии: сначала Spirit, потом соперник */
  score: [number, number];
  /** Формат серии */
  format: string;
  /** Состав в порядке позиций */
  roster: string[];
  coach: string;
  /** Первоисточник результата */
  source: string;
};

/** Языковая часть титула */
export type SpiritMatchText = {
  /** Где играли */
  venue: string;
  /** Что именно взято */
  prize: string;
  /** Одна строка о том, как прошла серия */
  line: string;
};

export type SpiritMatch = SpiritMatchStructure & SpiritMatchText;

/**
 * Высший титул, взятый в том же городе раньше. К 23 августа он не относится и
 * потому лежит отдельно от SPIRIT_STRUCTURE — но проверяется теми же тестами.
 */
export type SpiritCityTitle = {
  discipline: string;
  event: string;
  opponent: string;
  /** Счёт серии: сначала Spirit, потом соперник */
  score: [number, number];
  source: string;
};

/** Ссылка на источник под запиской */
export type SpiritSource = {
  label: string;
  href: string;
};

/** Строки страницы /spirit */
export type SpiritStrings = {
  title: string;
  description: string;
  /** Дата над заголовком, словами */
  date: string;
  eyebrow: string;
  heading: string;
  /** Вводные абзацы записки */
  lead: string[];
  /** Подписи внутри табло */
  scoreWord: string;
  rosterWord: string;
  coachWord: string;
  /** Ссылка на первоисточник результата */
  sourceWord: string;
  /** Хронология дня: подпись блока и сами шаги */
  timelineLabel: string;
  timeline: { mark: string; text: string }[];
  /** Совпадение с городом: подпись блока и сам текст */
  cityLabel: string;
  city: string[];
  /** Чем этот день войдёт в таблицы рекордов */
  factsLabel: string;
  facts: string[];
  /** Личная часть записки */
  noteLabel: string;
  note: string[];
  /** Ссылки и оговорка под ними */
  sourcesLabel: string;
  /** Чего на странице нет и почему */
  disclaimer: string;
  home: string;
};
