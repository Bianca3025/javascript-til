const places = ['Shibuya', 'Kichijoji', 'Yanesen', 'Shimokitazawa', 'Jiyuugaoka'];

places.splice(1, 0, 'Shimokitazawa');
places.splice(4,1);

console.log(places);