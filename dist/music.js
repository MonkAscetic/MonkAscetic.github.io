const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "告白气球",
        artist: '周杰伦',
        url: 'https://raw.githubusercontent.com/MonkAscetic/music/refs/heads/main/%E5%91%A8%E6%9D%B0%E4%BC%A6/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3',
        cover: 'https://monkascetic.github.io/2025/01/10/%E6%88%91%E4%BB%AC%E7%9A%84%E7%88%B1%E6%83%85/katong.jpg',
      },
      {
        name: "甜甜的",
        artist: '周杰伦',
        url: 'https://raw.githubusercontent.com/MonkAscetic/music/refs/heads/main/%E5%91%A8%E6%9D%B0%E4%BC%A6/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%94%9C%E7%94%9C%E7%9A%84.flac',
        cover: 'https://monkascetic.github.io/2025/01/10/%E6%88%91%E4%BB%AC%E7%9A%84%E7%88%B1%E6%83%85/katong.jpg',
      }
    ]
});

