import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AnimationContextType {
  hasAnimated: Record<string, boolean>;
  setHasAnimated: (id: string, value: boolean) => void;
  resetAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [hasAnimated, setHasAnimatedState] = useState<Record<string, boolean>>({});

  const setHasAnimated = (id: string, value: boolean) => {
    setHasAnimatedState((prev) => ({ ...prev, [id]: value }));
  };

  const resetAnimations = () => {
    setHasAnimatedState({});
  };

  useEffect(() => {
    // Reset animations when the user refreshes the page
    window.addEventListener('beforeunload', resetAnimations);
    return () => {
      window.removeEventListener('beforeunload', resetAnimations);
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ hasAnimated, setHasAnimated, resetAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
