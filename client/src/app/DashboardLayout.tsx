"use client";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg`}>
        {/* navbar */}
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
