module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/*',
        },
      ],
    },
  }
// next.config.js라는 파일이 처음부터 존재하지 않았기 때문에 직접 만들어 위와 같이 설정했다니 외부 이미지(지정한 호스트)도 가져올 수 있게 되었다!
