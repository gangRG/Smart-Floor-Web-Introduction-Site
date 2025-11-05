import { motion } from 'motion/react';
import { Database, Wrench, Zap, Target } from 'lucide-react';

export function ArchitectureSection() {
  const steps = [
    {
      icon: Database,
      title: '데이터 수집',
      description: '다양한 소스로부터 데이터를 수집하고 전처리합니다',
    },
    {
      icon: Wrench,
      title: 'Feature Engineering',
      description: '최적의 특성을 추출하고 변환합니다',
    },
    {
      icon: Zap,
      title: 'Emergency (긴급 처리)',
      description: '긴급 상황을 우선적으로 처리합니다',
    },
    {
      icon: Target,
      title: 'Spam (분류)',
      description: '스팸을 정확하게 분류합니다',
    },
  ];

  const stages = [
    {
      title: 'Stage 1',
      description: '초기 분류 및 필터링',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Stage 2',
      description: '상세 분석 및 최종 결정',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">SmartFlow 간체 아키텍처</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            효율적인 데이터 처리를 위한 다단계 파이프라인 구조
          </p>
        </motion.div>

        {/* Main Flow */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200"
            >
              <h3 className="text-center mb-2">원본 데이터</h3>
              <p className="text-center text-gray-600">수집된 원시 데이터</p>
            </motion.div>

            <div className="hidden lg:block text-gray-400">→</div>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {steps.slice(0, 2).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                  <step.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="mb-1">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:block text-gray-400">→</div>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {steps.slice(2).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 2) * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                  <step.icon className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="mb-1">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stages */}
        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`bg-gradient-to-br ${stage.color} rounded-2xl p-8 text-white`}
            >
              <h3 className="mb-2">{stage.title}</h3>
              <p className="text-white/90">{stage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Output */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="mb-2">최종 분석 결과</h3>
          <p className="text-white/90">정확도 높은 분류 및 예측 결과 제공</p>
        </motion.div>
      </div>
    </section>
  );
}
