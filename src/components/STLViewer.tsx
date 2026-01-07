import { useRef, useState, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Center, Environment } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three';
import { Upload } from 'lucide-react';

interface STLModelProps {
  url: string;
}

const STLModel = ({ url }: STLModelProps) => {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  // Compute bounding box to center and scale the model
  geometry.computeBoundingBox();
  const boundingBox = geometry.boundingBox;
  
  if (boundingBox) {
    const size = new THREE.Vector3();
    boundingBox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim; // Scale to fit nicely in view
    geometry.scale(scale, scale, scale);
    geometry.center();
  }

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial 
        color="#38bdf8" 
        metalness={0.3} 
        roughness={0.4}
      />
    </mesh>
  );
};

const LoadingPlaceholder = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#38bdf8" wireframe />
  </mesh>
);

export const STLViewer = () => {
  const [stlUrl, setStlUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.name.toLowerCase().endsWith('.stl')) {
      const url = URL.createObjectURL(file);
      setStlUrl(url);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="w-full aspect-[16/10] md:aspect-[2/1] rounded-xl overflow-hidden bg-gradient-to-br from-muted/80 to-muted/40 border border-border/20">
      {stlUrl ? (
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <Suspense fallback={<LoadingPlaceholder />}>
            <Center>
              <STLModel url={stlUrl} />
            </Center>
          </Suspense>
          <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true}
            autoRotate
            autoRotateSpeed={1}
          />
          <Environment preset="studio" />
        </Canvas>
      ) : (
        <div
          className={`w-full h-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
            isDragging ? 'bg-accent/10 border-accent' : ''
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".stl"
            className="hidden"
            onChange={handleFileInput}
          />
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
            <Upload className="w-8 h-8 text-accent" />
          </div>
          <p className="text-muted-foreground text-sm mb-2">
            Drag & drop an STL file here
          </p>
          <p className="text-muted-foreground/60 text-xs">
            or click to browse
          </p>
        </div>
      )}
    </div>
  );
};
