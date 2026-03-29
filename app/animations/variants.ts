import { type Transition, type Variants } from "framer-motion";

// Curva de transição personalizada para um visual "Apple-like" (suave e elegante)
const smoothTransition: Transition = {
  type: "spring",
  stiffness: 100, // Rigidez da mola
  damping: 20,    // Amortecimento (evita que balance demais)
  mass: 1         // Massa do objeto
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Garante que o container anime antes dos filhos
      staggerChildren: 0.1,    // Cria o efeito de cascata (0.1s entre cada item)
      duration: 0.3
    },
  },
};

const itemFromLeftVariants: Variants = {
  hidden: { x: -30, opacity: 0, scale: 0.95 }, // Reduzi o x para o movimento ser menos "agressivo"
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: smoothTransition
  },
};

const itemFromRightVariants: Variants = {
  hidden: { x: 30, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: smoothTransition
  },
};

export { containerVariants, itemFromLeftVariants, itemFromRightVariants };
