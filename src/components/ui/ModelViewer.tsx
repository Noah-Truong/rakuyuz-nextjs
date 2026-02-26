"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";

interface ModelViewerProps {
  modelPath: string;
  className?: string;
  /** Poster image to show while loading */
  poster?: string;
  /** Camera orbit string: "theta phi radius" in degrees/meters (e.g., "45deg 55deg 2.5m") */
  cameraOrbit?: string;
  /** Field of view in degrees */
  fieldOfView?: string;
  /** Auto-rotate the model */
  autoRotate?: boolean;
}

export function ModelViewer({
  modelPath,
  className = "",
  poster,
  cameraOrbit = "45deg 55deg 4m",
  fieldOfView = "30deg",
  autoRotate = true,
}: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if model-viewer is already defined
    if (customElements.get("model-viewer")) {
      createModelViewer();
      return;
    }

    // Load the script dynamically
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
    script.onload = () => {
      // Wait for custom element to be defined
      customElements.whenDefined("model-viewer").then(() => {
        createModelViewer();
      });
    };
    script.onerror = () => {
      setError("3Dビューアの読み込みに失敗しました");
      setIsLoading(false);
    };
    document.head.appendChild(script);

    function createModelViewer() {
      if (!container) return;
      
      // Clear any existing content
      container.innerHTML = "";
      
      const viewer = document.createElement("model-viewer") as any;
      viewer.src = modelPath;
      viewer.alt = "3D Model";
      viewer.setAttribute("camera-controls", "");
      viewer.setAttribute("camera-orbit", cameraOrbit);
      viewer.setAttribute("field-of-view", fieldOfView);
      viewer.setAttribute("shadow-intensity", "0.5");
      viewer.setAttribute("exposure", "1");
      viewer.setAttribute("loading", "eager");
      
      if (autoRotate) {
        viewer.setAttribute("auto-rotate", "");
      }
      if (poster) {
        viewer.poster = poster;
      }
      
      viewer.style.width = "100%";
      viewer.style.height = "100%";
      viewer.style.backgroundColor = "#e5e7eb";
      viewer.style.setProperty("--progress-bar-color", "#3b82f6");
      viewer.addEventListener("load", () => {
        setIsLoading(false);
      });
      
      viewer.addEventListener("error", () => {
        setError("モデルの読み込みに失敗しました");
        setIsLoading(false);
      });
      
      container.appendChild(viewer);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [modelPath, cameraOrbit, fieldOfView, autoRotate, poster]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div ref={containerRef} className="w-full h-full" />
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-20">
          <div className="text-center text-slate-700">
            <div className="relative w-12 h-12 mx-auto mb-3">
              <div className="w-12 h-12 border-4 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
            </div>
            <p className="text-sm text-slate-600">読み込み中...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-20">
          <div className="text-center text-slate-700">
            <svg
              className="w-10 h-10 mx-auto mb-2 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Fallback component when Three.js is not available
export function ModelViewerFallback({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-900/50">
      <div className="text-center text-white/60 p-8">
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-4"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
        </motion.div>
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs mt-2 max-w-xs mx-auto">{description}</p>
        <p className="text-xs mt-4 text-white/40">
          ドラッグで回転 • スクロールで拡大
        </p>
      </div>
    </div>
  );
}
