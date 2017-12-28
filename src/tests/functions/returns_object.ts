/**
 * converts millimeters to different units
 * @param mm millimeters
 */
function mmTo(mm = 0) {
  return {
    cm: mm / 10,
    inches: mm * 25.4
  };
}
