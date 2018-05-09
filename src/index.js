// @flow

/**
 * @author diegoperini
 * @see https://gist.github.com/dperini/729294 Source.
 * @see https://mathiasbynens.be/demo/url-regex Test cases.
 */
const createUrlRegex = (): RegExp => {
  return /^((https?|ftp):\/\/)(\S+(:\S*)?@)?((?!10(\.\d{1,3}){3})(?!127(\.\d{1,3}){3})(?!169\.254(\.\d{1,3}){2})(?!192\.168(\.\d{1,3}){2})(?!172\.(1[6-9]|2\d|3[0-1])(\.\d{1,3}){2})([1-9]\d?|1\d\d|2[01]\d|22[0-3])(\.(1?\d{1,2}|2[0-4]\d|25[0-5])){2}(\.([1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(([_a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(\.([a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(\.([a-z\u{00a1}-\u{ffff}]{2,})))(:\d{2,5})?(\/[^\s]*)?$/iu;
};

export {
  createUrlRegex
};
