import { motion, useReducedMotion } from "motion/react";

export function NatureBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-forest-900">
      {/* Base Background Image */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-forest-900/60 to-forest-900/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,33,24,0.6)_100%)]" />

      {/* Very Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuODUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2UpIi8+PC9zdmc+')]"/>
    </div>
  );
}
