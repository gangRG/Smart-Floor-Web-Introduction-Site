import { motion } from 'motion/react';
import { User, Mail, Github, Linkedin } from 'lucide-react';

export function TeamSection() {
  const team = [
    {
      name: '김대영',
      role: 'AI/ML Engineer & Team Leader',
      avatar: '👨‍💻',
      description: '데이터를 분석해 데이터의 질과 패턴을 파악해 머신러닝 모델 설계 및 최적화를 담당하여 전체 프로젝트를 총괄합니다',
      skills: ['Two-Stage Multi-Horizon', 'XGBoost, LightGBM, CatBoost', '28개 피처 엔지니어링'],
      contact: {
        email: 'daeyang.kim@smartflow.com',
        github: 'github.com/daeyangkim',
      },
    },
    {
      name: '한기옥',
      role: 'Backend Engineer',
      avatar: '👨‍💻',
      description: 'FastAPI 기반 RESTful API 서버 개발 및 머신러닝 모델 서빙과 실시간 예측 엔진을 담당합니다',
      skills: ['FastAPI', '자동 발주 관리', '34,617건 데이터 처리'],
      contact: {
        email: 'giok.han@smartflow.com',
        github: 'github.com/giokhan',
      },
    },
    {
      name: '윤샘',
      role: 'Frontend Developer',
      avatar: '👨‍💻',
      description: 'React + TypeScript 기반 실시간 대시보드 구현 및 Chart.js 활용 인터랙티브 데이터 시각화를 담당합니다',
      skills: ['React + TypeScript', 'Chart.js', '500건+ 주문 관리'],
      contact: {
        email: 'sam.yoon@smartflow.com',
        github: 'github.com/samyoon',
      },
    },
  ];

  const techStack = [
    { category: 'ML/DL', tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'] },
    { category: 'Backend', tools: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'] },
    { category: 'Data', tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
    { category: 'DevOps', tools: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'] },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">개발팀</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SmartFlow를 만든 열정적인 개발자들을 소개합니다
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-white mb-2">{member.name}</h3>
                <p className="text-white/90">{member.role}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">{member.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    <span className="truncate">{member.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Github size={16} />
                    <span className="truncate">{member.contact.github}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
        >
          <h3 className="text-center mb-8 text-white">기술 스택</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h4 className="text-white mb-4">{stack.category}</h4>
                <ul className="space-y-2">
                  {stack.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600 mb-2">
            © 2024 SmartFlow Team. All rights reserved.
          </p>
          <p className="text-gray-500">
            머신러닝 기반 지능형 데이터 분석 시스템
          </p>
        </motion.div>
      </div>
    </section>
  );
}
