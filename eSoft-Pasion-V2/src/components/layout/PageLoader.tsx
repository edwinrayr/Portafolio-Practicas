import { Skeleton } from '../ui/Skeleton';

export const PageLoader = () => {
  return (
    <div className="min-h-screen bg-bg pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* 1. IMITACIÓN DEL HERO SECTION */}
      <div className="flex flex-col items-center mb-20 space-y-6">
        {/* Badge pequeña */}
        <Skeleton className="h-8 w-48 rounded-full" />
        
        {/* Título Grande (2 líneas) */}
        <Skeleton className="h-16 w-3/4 md:w-1/2" />
        <Skeleton className="h-16 w-2/3 md:w-1/3" />
        
        {/* Párrafo */}
        <div className="space-y-3 w-full max-w-2xl mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>

        {/* Botones */}
        <div className="flex gap-4 mt-8">
            <Skeleton className="h-12 w-40 rounded-full" />
            <Skeleton className="h-12 w-40 rounded-full" />
        </div>
      </div>

      {/* 2. IMITACIÓN DEL BENTO GRID (SERVICIOS) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Caja Grande 1 */}
        <Skeleton className="h-64 md:col-span-2" />
        {/* Caja Pequeña 1 */}
        <Skeleton className="h-64 md:col-span-1" />
        {/* Caja Pequeña 2 */}
        <Skeleton className="h-64 md:col-span-1" />
        {/* Caja Grande 2 */}
        <Skeleton className="h-64 md:col-span-2" />
      </div>
    </div>
  );
};