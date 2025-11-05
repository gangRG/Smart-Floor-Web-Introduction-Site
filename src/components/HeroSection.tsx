import heroBackground from 'figma:asset/57bf1805bb1c0a74cd4d7cb8a1706838b85391e6.png';

export function HeroSection() {
  const stats = [
    { value: '86%', label: '모델 정확도', description: 'F1-Score 기준' },
    { value: '88.6%', label: 'F1 Score', description: '2단계 평균' },
    { value: '3.9%', label: '개선율', description: '기존 대비' },
    { value: '0.89', label: 'R² 값', description: '회귀 성능' },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <div className="inline-block bg-black/50 backdrop-blur-sm rounded-3xl px-8 sm:px-12 py-8 mb-12">
          <h1 className="text-white mb-4">SmartFlow</h1>
          <p className="text-white max-w-2xl mx-auto">
            머신러닝 기반 지능형 데이터 분석 시스템으로 높은 정확도와 빠른 처리 속도를 자랑합니다
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-white mb-2">{stat.value}</div>
              <div className="text-white mb-1">{stat.label}</div>
              <div className="text-white/90">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
