import { motion } from 'motion/react';
import { Layers, Filter, BarChart3 } from 'lucide-react';

export function TwoStageSection() {
  const stageDetails = [
    {
      stage: 'Stage 1: Classification',
      subtitle: '초기 분류 단계',
      metrics: 'F1: 88.6%',
      description: '머신러닝 기반 초기 분류로 데이터를 카테고리화합니다',
      features: ['LogisticRegression', 'RandomForest', 'SVM'],
      color: 'from-blue-500 to-blue-600',
      icon: Layers,
    },
    {
      stage: 'Stage 2: Regression',
      subtitle: '정밀 분석 단계',
      metrics: 'MAE: 3.94',
      description: '회귀 분석을 통해 정확한 예측값을 도출합니다',
      features: ['LinearRegression', 'Ridge', 'Lasso'],
      color: 'from-green-500 to-green-600',
      icon: BarChart3,
    },
  ];

  const improvements = [
    { metric: '모델 정확도', value: '71%', description: '높은 정확도' },
    { metric: '재현율', value: '22%', description: '개선 여지' },
    { metric: '정밀도', value: '73%', description: '우수한 성능' },
    { metric: '처리 속도', value: '250%', description: '기존 대비 향상' },
  ];

  return (
    <section id="two-stage" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Two-Stage 예측 방법론</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            2단계 파이프라인을 통한 정확한 분류 및 예측
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stageDetails.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${stage.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <stage.icon className="w-8 h-8" />
                  <h3>{stage.stage}</h3>
                </div>
                <p className="text-white/90 mb-2">{stage.subtitle}</p>
                <div className="text-white">{stage.metrics}</div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6">{stage.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {stage.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 핵심 성과지표 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8"
        >
          <h3 className="text-center mb-8">모델 성능 분석</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {improvements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-green-600 mb-2">{item.value}</div>
                <h4 className="mb-1">{item.metric}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
