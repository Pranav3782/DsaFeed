const HAIR_STYLES = [
  'shortFlat', 'shortRound', 'shortWaved', 'theCaesar', 'theCaesarAndSidePart',
  'straight01', 'straight02', 'curly', 'bob', 'bun', 'dreads', 'fro',
  'hat', 'hijab', 'turban', 'winterHat1'
];
const ACCESSORIES = ['none', 'kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers', 'eyepatch'];
const CLOTHING = ['blazerAndShirt', 'blazerAndSweater', 'collarAndSweater', 'graphicShirt', 'hoodie', 'overall', 'shirtCrewNeck', 'shirtVNeck'];

const buildAvatarUrl = (options) => {
  let url = `https://api.dicebear.com/9.x/avataaars/svg?seed=abc&skinColor=edb98a&backgroundColor=${options.bg || 'transparent'}`;
  if (options.top) url += `&top=${options.top}`;
  if (options.cloth) url += `&clothing=${options.cloth}`;
  if (options.acc && options.acc !== 'none') url += `&accessories=${options.acc}`;
  url += `&hairColor=2c1b18`;
  return url;
};

const urls = [];
urls.push(buildAvatarUrl({ top: 'shortFlat', acc: 'none', cloth: 'blazerAndShirt', bg: 'transparent' }));

HAIR_STYLES.forEach(style => {
  urls.push(buildAvatarUrl({ top: style, acc: 'none', cloth: 'shirtCrewNeck' }));
});
ACCESSORIES.forEach(acc => {
  urls.push(buildAvatarUrl({ top: 'shortFlat', acc: acc, cloth: 'shirtCrewNeck' }));
});
CLOTHING.forEach(cloth => {
  urls.push(buildAvatarUrl({ top: 'shortFlat', acc: 'none', cloth: cloth }));
});

async function checkUrls() {
  for (let u of urls) {
    const r = await fetch(u);
    if (r.status !== 200) {
      console.log('BROKEN:', r.status, u);
    }
  }
  console.log('Done checking', urls.length, 'URLs');
}
checkUrls();
