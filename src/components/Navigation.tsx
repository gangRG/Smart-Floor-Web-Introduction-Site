import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', label: '소개' },
    { id: 'architecture', label: '아키텍처' },
    { id: 'two-stage', label: 'Two-Stage 모델' },
    { id: 'performance', label: '모델 성능' },
    { id: 'services', label: '제공 서비스' },
    { id: 'cnn', label: 'CNN 결과' },
    { id: 'team', label: '개발팀' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-50"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="메뉴 토글"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-20 right-6 z-40 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-2 min-w-[200px]">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-xl transition-all duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
