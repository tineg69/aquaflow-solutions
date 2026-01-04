export const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-aqua/5 rounded-full blur-3xl animate-pressure-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pressure-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Animated wave layers */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-48 md:h-64 opacity-30"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className="animate-wave"
          fill="hsl(var(--aqua) / 0.3)"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-32 md:h-48 opacity-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ animationDelay: '-5s' }}
      >
        <path
          className="animate-wave"
          fill="hsl(var(--primary) / 0.4)"
          d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,186.7C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--aqua)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--aqua)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};
