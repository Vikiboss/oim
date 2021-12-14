/**
 * Return a string of time span. (30 days pre month and 360 days pre year by default)
 *
 * @since 0.1.0
 * @param {number} millisecond The date diff milliseconds.
 * @param {boolean} [isZh=true] The date diff milliseconds.
 * @returns {string} Return the random integer.
 * @example
 *
 * oim.formatDateDiff(new Date('2020/02/07 02:07') - new Date('2001/04/07 04:07'));
 *    // => '19年1月9天22时'
 *
 * oim.formatDateDiff(new Date('2020/02/07 02:07', false) - new Date('2001/04/07 04:07'));
 *    // => '19y1mo9d22h'
 */
const formatDateDiff = (millisecond, isZh = true) => {
  const [ms, s, m, h, d, mo] = [1000, 60, 60, 24, 30, 12];
  const [sl, ml, hl, dl, mol, yl] = [
    ms,
    ms * s,
    ms * s * m,
    ms * s * m * h,
    ms * s * m * h * d,
    ms * s * m * h * d * mo,
  ];
  const seconds = Math.floor((millisecond % ml) / sl);
  const minutes = Math.floor((millisecond % hl) / ml);
  const hours = Math.floor((millisecond % dl) / hl);
  const days = Math.floor((millisecond % mol) / dl);
  const months = Math.floor((millisecond % yl) / mol);
  const years = Math.floor(millisecond / yl);
  const sStr = seconds > 0 ? seconds + (isZh ? '秒' : 's') : '';
  const mStr = minutes > 0 ? minutes + (isZh ? '分' : 'm') : '';
  const hStr = hours > 0 ? hours + (isZh ? '时' : 'h') : '';
  const dStr = days > 0 ? days + (isZh ? '天' : 'd') : '';
  const moStr = months > 0 ? months + (isZh ? '月' : 'mo') : '';
  const yStr = years > 0 ? years + (isZh ? '年' : 'y') : '';
  return `${yStr}${moStr}${dStr}${hStr}${mStr}${sStr}`;
};

module.exports = formatDateDiff;
