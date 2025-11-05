import { motion } from 'motion/react';
import { Network, ArrowRight } from 'lucide-react';

export function CNNSection() {
  const sequence = [
    { name: 'Input\nLayer', description: '입력 데이터', color: 'from-purple-400 to-purple-500' },
    { name: 'Conv2D +\nPooling', description: '특징 추출', color: 'from-purple-400 to-purple-500' },
    { name: 'Conv2D +\nPooling', description: '특징 강화', color: 'from-purple-400 to-purple-500' },
    { name: 'Flatten\nLayer', description: '평탄화', color: 'from-purple-400 to-purple-500' },
    { name: 'Output\nLayer', description: '분류 결과', color: 'from-purple-400 to-purple-500' },
  ];

  const architectureDetails = [
    {
      layer: 'Convolution Layer',
      description: '이미지의 특징을 추출하는 레이어로, 필터를 사용하여 특징 맵을 생성합니다',
    },
    {
      layer: 'Pooling Layer',
      description: '특징 맵의 크기를 줄이고 중요한 정보만 유지합니다',
    },
    {
      layer: 'Flatten Layer',
      description: '2D 특징 맵을 1D 벡터로 변환하여 완전 연결 레이어로 전달합니다',
    },
    {
      layer: 'Dense Layer',
      description: '최종 분류를 수행하는 완전 연결 레이어입니다',
    },
  ];

  const performanceData = [
    { metric: '학습 정확도', value: '94.2%', description: '훈련 데이터' },
    { metric: '검증 정확도', value: '91.8%', description: '검증 데이터' },
    { metric: '손실 함수', value: '0.23', description: 'Cross-Entropy' },
    { metric: '학습 시간', value: '45분', description: '100 epochs' },
  ];

  return (
    <section id="cnn" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Network className="w-10 h-10 text-purple-600" />
            <h2>CNN 기반 Sequence 결과</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            컨볼루션 신경망을 활용한 이미지 분류 및 패턴 인식
          </p>
        </motion.div>

        {/* CNN Sequence Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            {sequence.map((layer, index) => (
              <div key={index} className="flex items-center gap-4 flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${layer.color} rounded-2xl p-6 text-white text-center flex-1`}
                >
                  <h4 className="whitespace-pre-line mb-2">{layer.name}</h4>
                  <p className="text-white/90">{layer.description}</p>
                </motion.div>
                {index < sequence.length - 1 && (
                  <ArrowRight className="hidden lg:block text-gray-400 flex-shrink-0" size={24} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-center mb-4">Output</h3>
            <p className="text-center text-gray-700">
              다중 클래스 분류 결과를 확률값으로 출력하여 가장 높은 확률의 클래스를 최종 예측값으로 선택
            </p>
          </div>
        </motion.div>

        {/* Architecture Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8"
          >
            <h3 className="mb-6">아키텍처 상세정보</h3>
            <div className="space-y-4">
              {architectureDetails.map((detail, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <h4 className="mb-1">{detail.layer}</h4>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8"
          >
            <h3 className="mb-6">모델 성능지표</h3>
            <div className="space-y-4">
              {performanceData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
                >
                  <div>
                    <h4 className="mb-1">{data.metric}</h4>
                    <p className="text-gray-500">{data.description}</p>
                  </div>
                  <div className="text-purple-600">{data.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
