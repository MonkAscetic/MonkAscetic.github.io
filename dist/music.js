const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "告白气球",
        artist: '周杰伦',
        url: 'https://lw-sycdn.kuwo.cn/6a521a93e02e1406e0fa5d1e49423131/67860308/resource/30106/trackmedia/M500002QE4Dt4Gkrgd.mp3?bitrate$128&format$mp3',
        cover: 'https://www.bcmp3.com/zb_users/cache/thumbs/82bf6c7db874e17280d829796d82bee3-225-135-0.jpg',
      }
    ]
});

