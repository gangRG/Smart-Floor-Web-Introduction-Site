import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function PerformanceSection() {
  const metrics = [
    {
      title: 'MAE 3.94',
      subtitle: 'Mean Absolute Error',
      description: 'MAE는 3.94로 매우 낮은 오차율을 보여줍니다',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'F1 88.6%',
      subtitle: 'F1 Score',
      description: 'MAE는 3.94로 F1 Score는 88.6%의 높은 성능을 달성했습니다',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: '3.9%',
      subtitle: '개선율',
      description: '3.9%의 성능 개선으로 최적화된 모델을 구축했습니다',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'R² 0.89',
      subtitle: '결정계수',
      description: 'R² 값은 0.89로 높은 설명력을 가지고 있습니다',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const chartData = [
    { name: 'Model 1', Stage1: 65, Stage2: 82 },
    { name: 'Model 2', Stage1: 75, Stage2: 68 },
    { name: 'Model 3', Stage1: 88, Stage2: 91 },
    { name: 'Model 4', Stage1: 78, Stage2: 85 },
    { name: 'Model 5', Stage1: 82, Stage2: 79 },
    { name: 'Model 6', Stage1: 86, Stage2: 93 },
  ];

  const performanceMetrics = [
    { label: '데이터 정확도', value: '71%', color: 'bg-green-500' },
    { label: '모델 재현율', value: '22%', color: 'bg-yellow-500' },
    { label: '정밀도 점수', value: '73%', color: 'bg-blue-500' },
    { label: '처리 효율성', value: '250%', color: 'bg-purple-500' },
  ];

  return (
    <section id="performance" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">모델 성능 분석</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            다양한 지표를 통한 종합적인 성능 평가
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${metric.color} rounded-2xl p-6 text-white`}
            >
              <h3 className="mb-2">{metric.title}</h3>
              <h4 className="text-white/90 mb-2">{metric.subtitle}</h4>
              <p className="text-white/80">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-center mb-8">Multi-Model 예측 성능 (F1-Score %)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Stage1" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Stage2" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8"
        >
          <h3 className="text-center mb-8">데이터스크 평가도</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`${metric.color} text-white rounded-xl p-6 mb-3`}>
                  <div>{metric.value}</div>
                </div>
                <p className="text-gray-700">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
