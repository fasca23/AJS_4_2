export function healthColorIndicator(object) {
  if (object.health > 50) {
    return 'healthy';
  } if (object.health > 15) {
    return 'wounded';
  }
  return 'critical';
}

export function sortHealth(array) {
  return array.sort((x, y) => y.health - x.health);
}
