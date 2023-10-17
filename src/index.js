export default function health(hero) {
  return (hero.health < 15) ? 'critical'
    : (hero.health < 50) ? 'wounded'
      : 'healthy';
}
