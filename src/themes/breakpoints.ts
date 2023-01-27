const size = {
  xSmall: 400, // for small screen mobile
  small: 600, // for mobile screen
  medium: 900, // for tablets
  large: 1280, // for laptops
  xLarge: 1440, // for desktop / monitors
  xxLarge: 1920, // for big screens
};

export const device = {
  xSmall: `(max-width: ${size.xSmall}px)`,
  small: `(min-width: ${size.xSmall + 1}px) and (max-width: ${size.small}px)`,
  medium: `(min-width: ${size.small + 1}px) and (max-width: ${size.medium}px)`,
  large: `(min-width: ${size.medium + 1}px) and (max-width: ${size.large}px)`,
  xLarge: `(min-width: ${size.large + 1}px) and (max-width: ${size.xLarge}px)`,
  xxLarge: `(min-width: ${size.xLarge + 1}px) and (max-width: ${
    size.xxLarge
  }px)`,
  xxxLarge: `(min-width: ${size.xxLarge + 1}px)`,
};
