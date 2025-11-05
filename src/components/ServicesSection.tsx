import { motion } from 'motion/react';
import { AlertCircle, FileText, Zap, ShieldX, PieChart as PieChartIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export function ServicesSection() {
  const services = [
    {
      icon: AlertCircle,
      title: 'Type A (긴급 우선처리)',
      description: '긴급 요청을 자동으로 감지하고 우선 처리합니다',
      features: ['실시간 감지', '자동 우선순위', '빠른 대응'],
      color: 'border-red-200 bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      icon: FileText,
      title: 'Stable (표준 처리)',
      description: '일반적인 요청을 안정적으로 처리합니다',
      features: ['표준 프로세스', '안정적 처리', '품질 보장'],
      color: 'border-blue-200 bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Zap,
      title: 'Emergency (긴급 처리)',
      description: '긴급 상황에 대한 즉각적인 대응을 제공합니다',
      features: ['즉시 대응', '우선 처리', '알림 시스템'],
      color: 'border-yellow-200 bg-yellow-50',
      iconColor: 'text-yellow-600',
    },
    {
      icon: ShieldX,
      title: 'Spam (스팸 차단)',
      description: '스팸을 자동으로 필터링하고 차단합니다',
      features: ['자동 필터링', '학습 기반', '정확한 분류'],
      color: 'border-orange-200 bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  const distributionData = [
    { name: '긴급 요청', value: 25, color: '#ef4444' },
    { name: '일반 요청', value: 40, color: '#3b82f6' },
    { name: '낮은 우선순위', value: 20, color: '#22c55e' },
    { name: '스팸', value: 15, color: '#6b7280' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">제공 서비스 기반 분류</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            4가지 주요 카테고리로 효율적인 요청 분류 및 처리
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.color} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105`}
            >
              <service.icon className={`w-12 h-12 ${service.iconColor} mb-4`} />
              <h3 className="mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <PieChartIcon className="w-8 h-8 text-gray-700" />
            <h3>처리 타입별 분포 현황</h3>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name} ${value}%`}
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
