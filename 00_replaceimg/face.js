console.log('go change my face!');

let filenames = [
  "00100dPORTRAIT_00100_BURST20180704173823672_COVER.jpg",
  "FB_IMG_1518342367495.jpg",
  "IMG_20170617_182656_083.jpg",
  "IMG_20170702_194237.jpg",
  "IMG_20170715_131222.jpg",
  "IMG_20170716_114141.jpg",
  "IMG_20170716_120134.jpg",
  "IMG_20170718_122039.jpg",
  "IMG_20170718_122044.jpg",
  "IMG_20170727_123444_392.jpg",
  "IMG_20170922_005506_132.jpg",
  "IMG_20170922_005714_504.jpg",
  "IMG_20170928_002950.jpg",
  "IMG_20171011_021437_396.jpg",
  "IMG_20171023_143025.jpg",
  "IMG_20171030_222533.jpg",
  "IMG_20171030_222554.jpg",
  "IMG_20180103_185252.jpg",
  "IMG_20180312_223730.jpg",
  "IMG_20180312_223819.jpg",
  "IMG_20180606_201446.jpg",
  "IMG_20180617_200924.jpg",
  "IMG_20180706_164821.jpg",
  "IMG_20180807_113900.jpg",
  "IMG_20180810_212650.jpg",
  "IMG_20180812_114102.jpg",
  "IMG_20180811_200127.jpg",
  "IMG_20180812_135112.jpg",
  "IMG_20180812_141137.jpg",
  "IMG_20180813_110945.jpg",
  "IMG_20180813_124608.jpg",
  "IMG_20180813_130842.jpg",
  "IMG_20180813_191535.jpg",
  "IMG_20180818_172003.jpg",
  "IMG_20180820_150955.jpg",
  "IMG_20180823_114532.jpg",
  "IMG_20180826_171502.jpg",
  "received_1899267533463772.jpeg",
  "Screenshot_20170625-195219.png",
  "Snapchat-1331939208.jpg",
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs){
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'faces/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);


}
